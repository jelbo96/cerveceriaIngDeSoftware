from django.shortcuts import render
from django.http import HttpResponse
from .models import Deliveries, Clients, Bash
from django.contrib.auth.decorators import login_required
from django.contrib import messages as messages_django
from .forms import BashForm, ClientsForm, DeliveriesForm
import datetime
from django.shortcuts import redirect

@login_required
def index(request):
    bash = Bash.objects.all()
    return render(request, "index.html", {'bash':bash})

@login_required
def clientes(request):
    clientes = Clients.objects.all()
    return render(request, "clientes.html", {'clientes':clientes})

@login_required
def entregas(request):
    if request.user.username != "SuperManada":
        entregas = Deliveries.objects.filter(user=request.user.username)
    else:
        entregas = Deliveries.objects.all()
    return render(request, "entregas.html", {'entregas':entregas})

@login_required
def planillaSAG(request):
    entregas = Deliveries.objects.all()
    return render(request, "planillaSAG.html", {'entregas':entregas})

@login_required
def bash(request):
    bash = Bash.objects.all()
    return render(request, "bash.html", {'bash':bash})


@login_required
def añadirCliente(request):

    if request.method == "POST":
        form = ClientsForm(request.POST)
        if form.is_valid():
            form.save()
            messages_django.success(request, 'Se ha guardado la información')
    else:
        #messages_django.success(request, 'Error')
        form = ClientsForm()

    return render(request, "añadirCliente.html", {'form':form})

@login_required
def editarCliente(request, id_cliente):
    objeto_cliente = Clients.objects.get(id=id_cliente)
    if request.method == "POST":
        form = ClientsForm(request.POST, instance=objeto_cliente)
        if form.is_valid():
            form.save()
            messages_django.success(request, 'Se ha guardado la información')
    else:
        #messages_django.success(request, 'Error')
        form = ClientsForm(instance=objeto_cliente)

    return render(request, "editarCliente.html", {'form':form, 'objeto_cliente':objeto_cliente})

@login_required
def eliminarCliente(request, id_cliente):
    objeto_cliente = Clients.objects.get(id=id_cliente)
    if request.method == "POST":
        print("entro")
        objeto_cliente.delete()
        return redirect('/clientes')
    return render(request, 'eliminarCliente.html', {'objeto_cliente':objeto_cliente})     



@login_required
def registrarEntrega(request):
    #AQUI SE DEBE BAJAR EL NUMERO DE LITROS DISPONIBLES EN EL BASH
    if request.method == "POST":
        form = DeliveriesForm(request.POST)
        if form.is_valid():
            
            instance = form.save(commit=False)
            instance.delivery_date = datetime.datetime.now()
           
            #Obtener el identificador del bash 
            print(instance.bash_id)

            bash = Bash.objects.get(id = instance.bash_id)

            instance.type_beer = bash.type_beer
            instance.user = request.user.username

            if (bash.liters_now >= instance.liters):
                bash.liters_now = bash.liters_now - instance.liters
                bash.save()    

                instance.save()

                messages_django.success(request, 'Se ha guardado la información')
            else:
                messages_django.error(request, 'Error! Se ingreso más litros que los disponibles en el bash')
                form = DeliveriesForm()
    else:
        #messages_django.success(request, 'Error')
        form = DeliveriesForm()

    return render(request, 'registrarEntrega.html', {'form':form})


@login_required
def editarBash(request, id_bash):
    objeto_bash = Bash.objects.get(id=id_bash)
    if request.method == "POST":
        form = BashForm(request.POST, instance=objeto_bash)
        print(form)
        if form.is_valid():
            form.save()
            messages_django.success(request, 'Se ha guardado la información')
    else:
        #messages_django.success(request, 'Error')
        form = BashForm(instance=objeto_bash)

    return render(request, 'editarBash.html', {'form':form, 'objeto_bash':objeto_bash})

@login_required
def editarEntrega(request, id_deliverie):
    

    objeto_deliverie = Deliveries.objects.get(id=id_deliverie)
    litros_actuales = objeto_deliverie.liters

    entrega_anterior = Deliveries.objects.get(id=id_deliverie)
    print("EDitar entrega -----")
    print("antiguo_id", entrega_anterior.bash_id)

    #Obtener el bash actual y los litros actuales de ese bash
    bash_actual_id = entrega_anterior.bash_id
    bash_actual = Bash.objects.get(id = bash_actual_id)
    litros_actuales_bash = bash_actual.liters_now

    if request.method == "POST":
        form = DeliveriesForm(request.POST, instance=objeto_deliverie)
        if form.is_valid():
            
            #Devolver los litros al bash inicial

            #Quitar los litros al nuevo bash 

            #Reasignar el tipo de cerveza

            instance = form.save(commit=False)
            instance.delivery_date = datetime.datetime.now()

            print("instance.liters", instance.liters, "entrega_anterior.liters", entrega_anterior.liters)
            nuevo_bash = Bash.objects.get(id = instance.bash_id)
            diferencia_litros = instance.liters - entrega_anterior.liters

            instance.type_beer = nuevo_bash.type_beer
            
            print("antiguo_id", entrega_anterior.bash_id, "nuevo_id", instance.bash_id)

            #If el bash es el mismo
            if (instance.bash_id == entrega_anterior.bash_id):
                if (bash_actual.liters_now >= diferencia_litros):
                    bash_actual.liters_now = bash_actual.liters_now - diferencia_litros
                    print(bash_actual , "=", bash_actual.liters_now , "- ", diferencia_litros)
                    bash_actual.save()    
                    print("bash existente")
                    instance.save()

                    messages_django.success(request, 'Se ha guardado la información')
                else:
                    messages_django.error(request, 'Error! Se ingreso más litros que los disponibles en el bash')
                    form = DeliveriesForm(instance=objeto_deliverie)
            #Else es otro bash
            else:
                #If se ingresaron la cantidad correcta de litros
                if (nuevo_bash.liters_now - instance.liters >= 0):
                    #restar desde el bash anterior
                    bash_actual.liters_now = bash_actual.liters_now + instance.liters
                    bash_actual.save()    
                    #sumar al nuevo
                    nuevo_bash.liters_now =  nuevo_bash.liters_now - instance.liters
                    nuevo_bash.save()
                    #guardar
                    print("nuevo bash")
                    instance.save()
                    messages_django.success(request, 'Se ha guardado la información')
                else:
                    messages_django.error(request, 'Error! Se ingreso más litros que los disponibles en el bash')
                    form = DeliveriesForm(instance=objeto_deliverie)

    else:
        #messages_django.success(request, 'Error')
        form = DeliveriesForm(instance=objeto_deliverie)

    return render(request, 'editarEntrega.html', {'form':form, 'objeto_deliverie':objeto_deliverie})

@login_required
def eliminarEntrega(request, id_deliverie):
    objeto_deliverie = Deliveries.objects.get(id=id_deliverie)
    if request.method == "POST":
        #print("entro")

        #Retornar litros al bash
        bash = Bash.objects.get(id = objeto_deliverie.bash_id)
        litros_bash = bash.liters_now
        bash.liters_now = bash.liters_now + objeto_deliverie.liters
        bash.save()    

        objeto_deliverie.delete()
        return redirect('/entregas')
    return render(request, 'eliminarEntrega.html', {'objeto_deliverie':objeto_deliverie})     

@login_required
def añadirBash(request):

    if request.method == "POST":
        form = BashForm(request.POST)
        print(form)
        if form.is_valid():
            form.save()
            messages_django.success(request, 'Se ha guardado la información')
    else:
        #messages_django.success(request, 'Error')
        form = BashForm()

    return render(request, 'añadirBash.html', {'form':form})


@login_required
def editarBash(request, id_bash):
    objeto_bash = Bash.objects.get(id=id_bash)
    if request.method == "POST":
        form = BashForm(request.POST, instance=objeto_bash)
        print(form)
        if form.is_valid():
            form.save()
            messages_django.success(request, 'Se ha guardado la información')
    else:
        #messages_django.success(request, 'Error')
        form = BashForm(instance=objeto_bash)

    return render(request, 'editarBash.html', {'form':form, 'objeto_bash':objeto_bash})

@login_required
def eliminarBash(request, id_bash):
    objeto_bash = Bash.objects.get(id=id_bash)
    if request.method == "POST":
        print("entro")
        objeto_bash.delete()
        return redirect('/bash')
    return render(request, 'eliminarBash.html', {'objeto_bash':objeto_bash})      

@login_required
def testTable(request):
    return render(request, 'testTable.html')
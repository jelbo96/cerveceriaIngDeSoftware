from django import forms
from .models import Bash, Clients, Deliveries

#Forms para guardar nuevos
class BashForm(forms.ModelForm):
    name_bash = forms.CharField(label= "Nombre del bash:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese un nombre de bash"}))
    folio = forms.CharField(label= "Folio:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese el numero de folio"}))
    capacity = forms.DecimalField(label= "Capacidad del bash:", max_value=2000, widget=forms.NumberInput(attrs={'class': 'input','placeholder':"Ingrese el numero de litros (Se pueden indicar ml con formato decimal)"}))
    liters_now = forms.DecimalField(label= "Litros actuales:", max_value=2000, widget=forms.NumberInput(attrs={'class': 'input','placeholder':"Ingrese el numero de litros que tiene el bash actualmente (Se pueden indicar ml con formato decimal)"}))
    class Meta:
        model = Bash 
        fields = ('name_bash', 'type_beer', 'folio', 'capacity', 'liters_now') #Aqui se tiene que actualizar automaticamente liters_now
    def __init__(self, *args, **kwargs):
        super(BashForm, self).__init__(*args, **kwargs)
        self.fields['type_beer'].label = "Tipo de cerveza:"


class ClientsForm(forms.ModelForm):
    name = forms.CharField(label= "Nombre del cliente:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese un nombre de cliente"}))
    address = forms.CharField(label= "Dirección del cliente:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese una dirección"}))
    contact_number = forms.CharField(label= "Número de contacto:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese un número de contacto"}))
    mail = forms.CharField(label= "Mail de contacto:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese un mail de contacto"}))
    class Meta:
        model = Clients
        fields = ('name', 'address', 'contact_number', 'mail')


class DeliveriesForm(forms.ModelForm):
    #Tipo_cerveza litros folio tipo_de_empaque cliente bash info_adicional
    liters = forms.DecimalField(label= "Litros:", max_value=2000, widget=forms.NumberInput(attrs={'class': 'input','placeholder':"Ingrese el numero de litros (Se pueden indicar ml con formato decimal)"}))
    folio = forms.CharField(label= "Folio:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese el numero de folio"}))
    additional_info = forms.CharField(label= "Información adicional:", widget=forms.TextInput(attrs = {'class': 'form-control','id': 'text_input','placeholder':"Ingrese informacion adicional (si es necesario)"}))
    class Meta:
        model = Deliveries
        fields = ('liters', 'folio', 'package', 'bash', 'client', 'additional_info')
    def __init__(self, *args, **kwargs):
        super(DeliveriesForm, self).__init__(*args, **kwargs)
        #self.fields['type_beer'].label = "Tipo de cerveza:"
        self.fields['client'].label = "Cliente:"
        self.fields['package'].label = "Formato:"
        self.fields['bash'].label = "Bash:"
        self.fields['additional_info'].required = False



#Forms para editar existentes

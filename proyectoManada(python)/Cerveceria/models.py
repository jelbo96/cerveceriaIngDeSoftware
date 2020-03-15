from django.db import models

# Create your models here.
class Bash(models.Model):
    OpcionesCerveza = (
    ('s', 'Sangre de Lobo'),
    ('p', 'Pelolais'),
    ('c', 'Caperuza'),
    ('n', 'Bala de Plata'),
    ('e', 'Serie experimental'),
    )

    id = models.BigAutoField(primary_key=True)
    name_bash = models.CharField(max_length=45)
    type_beer = models.CharField(max_length=1, choices=OpcionesCerveza, default='s')
    folio = models.IntegerField(default=0)
    capacity = models.DecimalField(max_digits=8, decimal_places=3)
    liters_now = models.DecimalField(max_digits=8, decimal_places=3)

    class Meta:
        db_table = 'bash'
    def __str__(self):
        return self.name_bash
    def type_beer_verbose(self):
        return dict(Bash.OpcionesCerveza)[self.type_beer]

class Clients(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=45)
    address = models.CharField(max_length=45)
    contact_number = models.CharField(max_length=45)
    mail = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        db_table = 'clients'
    def __str__(self):
        return self.name


class Deliveries(models.Model):
    OpcionesCerveza = (
    ('s', 'Sangre de Lobo'),
    ('p', 'Pelolais'),
    ('c', 'Caperuza'),
    ('n', 'Bala de Plata'),
    ('e', 'Serie experimental'),
    )

    OpcionesPackage = (
    ('b10', 'Barril de 10 litros'),
    ('b30', 'Barril de 30 litros'),
    ('b50', 'Barril de 50 litros'),
    ('blt', 'Botella de litro cangrejo'),
    ('g19', 'Growler de 1.9'),
    ('330', 'Botella 330'),
    ('ltr', 'Litro recarga'),
    )

    id = models.BigAutoField(primary_key=True)
    delivery_date = models.DateTimeField()
    type_beer = models.CharField(max_length=1, choices=OpcionesCerveza, default='s')
    liters = models.DecimalField(max_digits=8, decimal_places=3)
    folio = models.IntegerField()
    additional_info = models.CharField(max_length=200)
    package = models.CharField(max_length=3, choices=OpcionesPackage, default='b10')
    client = models.ForeignKey(Clients, on_delete=models.CASCADE, blank=True, null=True)
    bash = models.ForeignKey(Bash, on_delete=models.CASCADE, blank=True, null=True)
    user = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        db_table = 'deliveries'
    def __str__(self):
        texto = str(self.client)+" - "+str(self.delivery_date)+" - "+str(self.liters)+" litros"
        return texto
    def type_beer_verbose(self):
        return dict(Deliveries.OpcionesCerveza)[self.type_beer]
    def package_verbose(self):
        return dict(Deliveries.OpcionesPackage)[self.package]



#Listo
class Employees(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=45)
    working_hours = models.CharField(max_length=45)
    role = models.CharField(max_length=45)
    phone_number = models.CharField(max_length=191)
    address = models.CharField(max_length=191)

    class Meta:
        db_table = 'employees'

#listo
class Inputs(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=45)
    description = models.CharField(max_length=45)
    quantity = models.CharField(max_length=45)
    last_update = models.DateTimeField()

    class Meta:
        db_table = 'inputs'

#listo
class Inventory(models.Model):
    id = models.BigAutoField(primary_key=True)
    total_quantity = models.IntegerField()
    input = models.ForeignKey(Inputs, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        db_table = 'inventory'

#listo
class CheckIns(models.Model):
    id = models.BigAutoField(primary_key=True)
    check_in_date = models.DateTimeField()
    total_quantity = models.IntegerField()
    input = models.ForeignKey(Inputs,  on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        db_table = 'check_ins'

#Listo
class Providers(models.Model):
    id = models.BigAutoField(primary_key=True)
    company_name = models.CharField(max_length=45)
    contact_name = models.CharField(max_length=45)
    contact_number = models.CharField(max_length=45)
    address = models.CharField(max_length=191)

    class Meta:
        db_table = 'providers'

"""proyectoManada URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from Cerveceria import views
from django.urls import include, path


urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('', views.index, name='index'),
    path('clientes', views.clientes, name='clientes'),
    path('entregas', views.entregas, name='entregas'),
    path('planillaSAG', views.planillaSAG, name='planillaSAG'),
    path('bash', views.bash, name='bash'),
    path('añadirCliente', views.añadirCliente, name='añadirCliente'),
    path('editarCliente/<int:id_cliente>', views.editarCliente, name='editarCliente'),
    path('eliminarCliente/<int:id_cliente>', views.eliminarCliente, name='eliminarCliente'),
    path('registrarEntrega', views.registrarEntrega, name='registrarEntrega'),
    path('editarEntrega/<int:id_deliverie>', views.editarEntrega, name="editarEntrega"),
    path('eliminarEntrega/<int:id_deliverie>', views.eliminarEntrega, name="eliminarEntrega"),
    path('añadirBash', views.añadirBash, name='añadirBash'),
    path('editarBash/<int:id_bash>', views.editarBash, name='editarBash'),
    path('eliminarBash/<int:id_bash>', views.eliminarBash, name='eliminarBash'),
    path('testTable', views.testTable, name='testTable'),

]
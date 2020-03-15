from django import template

register = template.Library()

@register.simple_tag
def obtener_mes_completo(fecha):
    meses = {'1': "enero", '2': "febrero", '3': "marzo", '4': "abril",
             '5': "mayo", '6': "junio", '7': "julio", '8': "agosto",
             '9': "septiembre", '10': "octubre", '11': "noviembre", '12': "diciembre"}
    return(meses[str(fecha.month)].capitalize())

@register.simple_tag
def retornar_numero_bash(bash):
    pos_gato = bash.find("#")
    if pos_gato != -1:
        return bash[pos_gato:len(bash)]
    else:
        return bash
let PrimerClave, SegundaClave;
PrimerClave= parseFloat(prompt("Ingrese la Clave"))
SegundaClave= parseFloat(prompt("Reingrese la clave nuevamente"))
if(PrimerClave==SegundaClave){
    alert( "La clave ha sido generada con éxito")
}
else{
    alert ("Los datos ingresados son incorrectos, reintente nuevamente!")
}
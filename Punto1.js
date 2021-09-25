/*1.PROBLEMA: Yoda el maestro jedi, necesita asignar a sus
aprendices Padawans 2 actividades dependiendo de la edad de
ellos:
 Manejo de la fuerza: Si el aprendiz es menor de 15 años
 Manejo del sable de luz: Si el aprendiz es mayor de 15
años
Inicialmente, se debe programar una función que asocie los
datos de: {nombre, planeta, edad y estatura} de 1 Padawan a
un objeto y una vez este objeto sea creado se debe llamar a
una función secundaria que clasifique y muestre en consola la
actividad asignada al Padawan*/



let estudiante = {
    nombre:"hernan",
    planeta:"rojo",
    edad:14,
    estatura:1.82
}

function asociacion(datos,Respuesta){
    setTimeout(function(){
       
        if(datos.edad>=15){
            Respuesta(200);
           }else{
            Respuesta(204);
           }
       },5000)
 }

 asociacion(estudiante,function(codigo){
    if(codigo==200){
        console.log("Manejo del sable de luz");
        
    }else{
        console.log("Manejo de la fuerza")
    }
 })



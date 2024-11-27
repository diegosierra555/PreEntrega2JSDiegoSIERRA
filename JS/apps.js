
// ********************************************************** // 
// Declaracion de Variables
// ********************************************************** // 
let unoNuevo = "";
let unlugarElegido = "";
// los arrays que voy a usar
const listaLugares = [];
const listaPasajeros = [];

// ********************************************************** // 
// Declaracion de Clases
// ********************************************************** // 
class Alojamiento
    {
        constructor(codigoLugar, nombreLugar, direccionLugar, capacidad)
        { this.codigoLugar= codigoLugar;
            this.nombreLugar = nombreLugar;
            this.direccionLugar = direccionLugar;
            this.capacidad = capacidad;

        }
    }
// constructora de un pasajero
class Pasajero
{
    constructor(nombrePasajero, alojamientoAsignado)
    { this.nombrePasajero =nombrePasajero.toUpperCase();
        this.alojamientoAsignado = alojamientoAsignado;
    }
    infoUbicacion() 
    {
        console.log(this.nombrePasajero + " esta alojado en "+this.alojamientoAsignado)
    }
};
// ********************************************************** // 
// Declaracion de Funciones 
// ********************************************************** // 

// FUNCION : contar la capacidad disponible de un lugar
function disponible(lugar)
{
let ocupacion = 0 ; 
let capa = -1;
// Busco la capacidad
for (let i=0; i<listaLugares.length; i++) 
    {
    // mejorar la busqueda de la capacidad con index of 
    if (listaLugares[i].nombreLugar == lugar) 
        { capa = listaLugares[i].capacidad}
    };
// Cuento la ocupacion
for (let i=0; i<listaPasajeros.length; i++) 
        {
        // console.log(listaLugares[i].nombreLugar + "  -  "+ lugar);
        if (listaPasajeros[i].alojamientoAsignado == lugar) 
        { // console.log("asignacion " + listaLugares[i].nombreLugar);
            ocupacion ++ ;};
        };
    
return(capa - ocupacion );
}

// FUNCION : oobtener el domicilio de un pasajero
function alojadoEn(pax)
{
let x = "" ;
let a = " Direccion DESONOCIDA. ";
// Busco el lugar donde fue asignado el pasajero
for (let i=0; i<listaPasajeros.length; i++) 
    {
    if (listaPasajeros[i].nombrePasajero == pasajerosConsulta.toUpperCase()) 
    { // 
        x = listaPasajeros[i].alojamientoAsignado};
    };

//Busco la direccion del lugar asignado y la retorno
for (let i=0; i<listaLugares.length; i++) 
{
    if (listaLugares[i].nombreLugar == x)
        a = listaLugares[i].direccionLugar;

};

return(a);
};


// ********************************************************** // 
// Inicializo los objetos alojamiento en un array lista de lugares

// ********************************************************** // 
listaLugares.push(new Alojamiento("A23","JUNCAL","Juncal 2692. Piso 4",4));
listaLugares.push(new Alojamiento("B52","MELO","Melo 3498. Piso 1",2));
listaLugares.push(new Alojamiento("4F2","RINCON","Rincon 1912. Lomas ",6));
listaLugares.push(new Alojamiento("A16","FRENCH","French 654 PB A",2));



// ********************************************************** // 
// INICIO EL PROCESO //
// ********************************************************** // 

// Ingreso un nuevo Pasajero y el lugar elegido
unoNuevo = prompt("Nombre del nuevo pasajero o FIN para terminar la carga de pasajeros");
unoNuevo = unoNuevo.toUpperCase();


while (unoNuevo != "FIN")
    {
       
        unlugarElegido = prompt("Lugar elegido para " + unoNuevo);
        unlugarElegido = unlugarElegido.toUpperCase();

        console.log(disponible(unlugarElegido));
        
        if ( disponible(unlugarElegido)  > 0 )
        {// le asigno el lugar    
            listaPasajeros.push(new Pasajero(unoNuevo,unlugarElegido))
        }
        else
            if ( disponible(unlugarElegido) == 0)
            { alert("No hay mas lugar en " + unlugarElegido + ", por favor vuelva a ingresar al pasajero.")}
            else 
                alert(unlugarElegido + " no es un lugar valido o no esta disponible. Vuelva a ingresar al pasajero.");
            
    // continuo el  bucle pidiendo otro nombre o la palabra fin
    unoNuevo = prompt("Nombre del nuevo pasajero o FIN para terminar la carga de pasajeros");
    unoNuevo = unoNuevo.toUpperCase();
    } 

// Dado un lugar , recorro la lista y muestro los alojados
const pasajerosXLugar = prompt("Ingrese el nombre del lugar para obtener la lista de pasajeros hospedados:")

for (let i=0; i<listaPasajeros.length; i++) 
    {
        if (listaPasajeros[i].alojamientoAsignado == pasajerosXLugar.toUpperCase()) 
            { // console.log("asignacion " + listaLugares[i].nombreLugar);
            alert(listaPasajeros[i].nombrePasajero)};
    };


// A un pasajero le muestro el domicilio de su alojamiento
const pasajerosConsulta = prompt("Ingrese el nombre del pasajero para obtener el hospedaje: ");

alert (pasajerosConsulta + " esta alojado en " + alojadoEn(pasajerosConsulta.toUpperCase()) );
    
// FIN


console.log(listaLugares);
console.log(listaPasajeros)


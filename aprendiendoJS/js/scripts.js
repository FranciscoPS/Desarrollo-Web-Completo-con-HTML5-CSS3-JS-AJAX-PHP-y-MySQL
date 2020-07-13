console.log('Script enlazado');

//Existen 3 formas de crear variables

// var nombreCliente = 'Francisco'; //camelCase
// var nombre_cliente = 'Jesus'; //under_score
// var NombreCliente = 'Javier'; //PascalCase
// var nombrecliente = 'Maribel'; //malapractica

// var nombre;
// var edad = 24;
// var edad1,edad2;

// edad1 = 0;
// edad2 = 100;

// nombre = 'Francisco';

// console.log(nombre+" tienes "+edad+" años");

// var nombre = 'Francisco';
// var nombre = 'Jesus'; /*Var SI te permite declarar dos veces la misma variable*/

// let nombre = 'Francisco';
// let nombre = 'Jesus'; /*Let no te permite declarar dos veces la misma varibale*/

// console.log(nombre);

// const cliente = 'Francisco'; //Una variable const siempre debe tener un valor asignado y no puede reasignarse su valor

// const divMensaje = document.getElementById('mensaje');
// console.log(divMensaje);

// let nombre;

// nombre = 'Juan';
// let mensaje = 'Don\'t do that!';

// console.log(nombre);
// console.log(mensaje);

// let aprendiendo = 'Aprendiendo',
//     tecnologia = 'Javascript';

// console.log(aprendiendo+' '+tecnologia);

// //Template String

// console.log(`${aprendiendo} (template string) ${tecnologia}`); //El espacio tambien se incluye

// let banda='Metallica', cancion='Enter Sandman';

// let nombre = banda+' '+cancion;

// console.log(nombre);

// //Length
// console.log('Longitud = '+nombre.length);

// //Concat
// nombre = nombre.concat(" me gusta y ", "es genial", aprendiendo, tecnologia);

// //Uperrcase
// nombre = nombre.toUpperCase();

// //Lowercase
// nombre = nombre.toLowerCase();

// //Split
// let actividad = 'Estoy aprendiendo JavaScript con el curso';
// actividad = actividad.split(' ');
// console.log(actividad);
// let intereses = 'Leer, caminar, correr, programar, aprender';
// intereses = intereses.split(', '); //Hay que colocar también el espacio para que no lo cuente
// console.log(intereses); 

// //Replace
// let anuncio;
// aprendiendo ='Estoy aprendiendo Javascript';
// anuncio = aprendiendo.replace('Javascript', 'JS');
// console.log(anuncio);

// //Includes
// nombre = anuncio.includes('JS'); //Evalua si existe ese string en la variable
// nombre = anuncio.includes('Javascript');
// console.log(nombre);

// let email = 'correo@correo.com';
// nombre = email.includes('@');
// console.log('email: '+ nombre);

// //Repeat
// let master = 'Master', puppets='Puppets';
// console.log(master.repeat(3)+' '+puppets);


// console.log(nombre);
 

// N U M E R O S //
// const numero1 = 30,
//     numero2 = '20',
//     numero3 = 20.20,
//     numero4 = -3,
//     numero5 = 20;

// let resultado;

// resultado = numero1 + numero2; //Los concatena ya que es un entero más un int

// //Redondear números
// resultado = Math.round(2.5); //Redondea hacia arriba a partir de .5
// resultado = Math.floor(2.99); //No importa el decimal, siempre lo redondea hacia abajo
// resultado = Math.ceil(2.01); //No importa el decimal, siempre lo redondea hacia arriba

// //Raíz Cuadrada
// resultado = Math.sqrt(144);

// //Valor Absoluto
// resultado = Math.abs(-100); //Te da el valor absoluto, es decir, el valor siempre en positivo

// //Potencia
// resultado = Math.pow(8,3); //8^3

// //Número máximo y mínimo
// resultado = Math.min(3,1,34,3,5,435,3,1); //Muestra el número con menor valor
// resultado = Math.max(3,1,34,3,5,435,3,1); //Muestra el número con mayor valor


// console.log(resultado);

// CONVERTIR STRING A NUMERO //
// let numero1 = 50,
//     numero2 = "10",
//     numero3 = "tres";

// console.log(numero1+numero2);

//Casteo
// console.log(numero1 + Number(numero2));
// console.log(parseInt(16.34));
// console.log(parseFloat(18));
// console.log(Number(true)); //A los booleanos los convierte en 1 o 0
// console.log(Number(false));
// console.log(Number(null)); //El nulo lo convierte en 0 también

//To Fixed
// let numero1 = "1021308290094309.43094039";
// let numero2 = 123421341234.23141234;

// console.log(Number(numero1).toFixed(5)); //Toma el número, y nosotros escogemos los decimales

// CONVERTIR NUMERO A STRING //
// let dato = 1946755728364758;

// dato = String(dato);

// console.log(dato);
// console.log (dato.length);

// dato = new Date();
// dato = String(new Date());
// dato = String([1,2,3,4,5]); //Cuenta los caracteres 

// JAVASCRIPT Y SUS TIPOS DE DATOS //

// const nombre = 'Juan';
// console.log(typeof nombre);

// const edad = 80;
// console.log(typeof edad);

// let aprendiendoJS = true;
// console.log(typeof aprendiendoJS);

// let valor;
// console.log(typeof valor);
// valor = 'Hola';
// console.log(typeof valor);
// valor = true;
// console.log(typeof valor);
// valor = 20;
// console.log(typeof valor);
// valor = "20";
// console.log(typeof valor);

// let hijos = null;
// console.log(typeof hijos); //El null se reconoce como un objeto

// let nombre;
// console.log(typeof nombre); //Cuando una variable no tiene valor, su tipo de valor es undefined

// let lenguaje = ['HTML5', 'JS', 'PHP'];
// console.log(typeof lenguaje); //Los objetos son de tipo objeto

// //Objeto
// let persona = {
//     nombre: 'Juan',
//     ciudad: 'Mexico'
// }

// console.log(typeof persona);

// //Fecha
// let fecha = new Date();
// console.log(typeof fecha);

// ARRAYS // 

// const numeros = [10, 20, 30, 40, 50];
// console.log(numeros);
// console.table(numeros);

// const meses = new Array('Enero','Feberero','Marzo');
// console.log(meses); 
// console.table(meses); 
// console.log(meses[2]); 
// //Aagregar elementos a un arreglo
// meses[3] = 'Abril';
// meses.push('Mayo'); //Agrega al final de un arreglo
// console.log(meses);

// meses.unshift('Mes 0'); //Agrega al inicio del arreglo
// meses.pop(); //Elimina el último elemento del arreglo 
// console.log(meses);

// meses.shift(); //Elimina el primer elemento del arreglo
// console.log(meses);

// meses.splice(0,1); //Elimina un rango de elementos del arreglo

// meses.reverse(); //Invierte el orden de los elementos del arreglo

// const arreglo = ['Hola',10,true,"si",null, undefined];
// console.log('Arreglo Length: '+arreglo.length);

// console.log('Arreglo es un arreglo: '+Array.isArray(arreglo)); //Valida si el elemento es un arreglo

// let frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];

// frutas.sort(); //Ordena alfabéticamente el arreglo

// console.log(frutas);

// OBJETOS //

//Este es un Literal Object
// const  persona = {
//     nombre: 'Juan',
//     apellido: 'De la Torre',
//     edad: 80,
//     trabajo: true,
//     musica: ['Trance', 'Rock', 'Grunge'],
//     hogar: {
//         ciudad: 'Guadalajara',
//         pais: 'Mexico'
//     }
// }

// console.log(persona);
// console.log('Nombre: '+persona.nombre);
// console.log(persona.musica);
// console.log(persona.musica[2]);

// console.log(persona.hogar.ciudad);
// console.log(persona['hogar']['ciudad']); //Es lo mismo que la sintaxis de arriba

// TEMPLATE STRINGS //

// const nombre = 'Juan', 
//     trabajo = 'Desarrollador Web'; 

// console.log('Nombre: '+nombre+', Trabajo: '+trabajo);

// console.log(`Nombre: ${nombre} \nTrabajo: ${trabajo}`); //En lugar de concatenar solamente se pone ${} dentro de comillas invertidas

// const contenedorApp = document.querySelector('#mensaje'); //Permite tomar un elemento del html en base al id
//  //Concatenando
// let html = '<ul>'+
//                 '<li>Nombre: '+nombre+ '</li>' +
//                 '<li>Trabajo: '+trabajo+ '</li>' +
//             '</ul>';
// //Template Strings
// let html2 = `<ul>
//                 <li>Nombre: ${nombre} </li>
//                 <li>Trabajo: ${trabajo} </li>
//             </ul>`

// contenedorApp.innerHTML = html2;

// Funciones //
//function declaration: Esta funcion puede ser llamada antes de la declaración
// saludar('Francisco','Desarrollador Web');
// saludar('Juan','Medico');
// saludar('David','Asesor');
// saludar('Luis');

// function saludar(nombre, trabajo){
//     console.log(`Hola ${nombre}, trabajas como ${trabajo}`);
// }
// //Valor por default a un valor, si trabajo no tiene un valor, asigna el que este por defecto
// function saludar(nombre, trabajo='No sabemos'){
//     console.log(`Hola ${nombre}, trabajas como ${trabajo}`);
// }
// //function experssion: Esta funcion NO puede ser llamada antes de la declaración, marca error
// const suma = function(){
//     console.log(1+2);
// }
// suma();

// // IIFE : Funciones que se mandan a llamar una vez que se crean

// (function(tecnologia){
//     console.log('Aqui Estoy Aprendiendo '+tecnologia);
// })('Javascript');

// METODOS // Es una funcion pero dentro de un objeto
 
// const musica = {
//     reproducir: function(cancion='Desconocido'){
//         console.log('Reproduciendo '+cancion);
//     },
//     pausar: function(){
//         console.log('Pausando cancion');
//     }
// }

// //Los metodos tambien pueden ir por fuera del objeto
// musica.borrar = function(id){
//     console.log('Borrando la cancion con el ID: '+id);
// }

// musica.reproducir('Hotel California');
// musica.reproducir('Everlong');
// musica.reproducir();

// musica.pausar();

// musica.borrar(121);


// Funciones que retornan valores y Arrow Functions //
// const suma = function(a = 0, b=0){
//     return a + b;
// }
// /*Arrow Function: Se declara igual pero se quita la palabra function, si tienes un solo parametro puedes 
// quitar los parentesis, pero con dos parametros o más si lo lleva, tambien pueden quitarse las llaves y el return*/
// const multiplicar = a => a * 5;


// let total;
// let resultado = suma(10,20);
// total = multiplicar(resultado);
// console.log(total);

// /* Forma convencional de crear una funcion
// let viajando =  function(destino){
//     return 'Viajando a la ciudad de '+ destino;
// }*/

// let viajando = destino => `Viajando a la ciudad de ${destino}`;

// let viaje;
// viaje = viajando('Londres');
// viaje = viajando('Paris')
// console.log(viaje);

// OBJECT CONSTRUCTOR Y LA PALABRA THIS // 

//Objecto Literal
// const persona = {
//     nombre: 'Francisco'
// }
// console.log(persona);
//Object Constructor
//Esta es una forma pero se recomienda usar Clases
// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;
// }

// class Tarea{
//     constructor(nombre, urgencia){
//         this.nombre = nombre;
//         this.urgencia = urgencia;
//     }
// }

// //Crear nuevas tareas usando Object Constructor
// const tarea1 = new Tarea('Aprender JavaScript','Urgente');
// const tarea2 = new Tarea('Preparar Café','Urgente');
// const tarea3 = new Tarea('Pasear al perro','Media');
// const tarea4 = new Tarea('Conocer a mis suegros','0');

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);
// console.log(tarea4);

// //
// const persona = {
//     nombre: 'Juan',
//     edad: 24,
//     anioNacimiento: function(){
//         return new Date().getFullYear() - this.edad;
//     }
// }

// console.log(persona.anioNacimiento());

// FECHAS //
// const diaHoy = new Date();

// console.log(diaHoy);


// let valor = diaHoy;
// valor = diaHoy.getMonth() ; //getMont() comienza a contar los meses desde 0, Enero = 0
// valor = diaHoy.getDay(); // Retorna el número del día, Domingo = 0
// valor = diaHoy.getDate(); //Retorna el número del día del Mes, lo regresa tal cual la fecah 01=01
// valor = diaHoy.getFullYear(); //Retorna el año actual
// valor = diaHoy.getMinutes(); //Retorna los minutos de la hora
// valor = diaHoy.getHours(); //Retorna la hora del día
// valor = diaHoy.getTime(); //Retorna un TIMESTAMP, regresa en milisegundos

// //Cambia o establece los valores deseados
// valor = diaHoy.setFullYear(1996);
// valor = diaHoy.getFullYear;

// console.log(valor);

// //new Date() lleva el formate de MesDiaAño
// const unDia = new Date(6261996); //Puedes instanciar una fecha específica

// console.log('Naci el día '+unDia.getDay());

// CONDICIONALES //

// const puntaje = '1000';
// // == Valida que coincidan sin importar el tipo de variable que sea, puede ser string contra numero y hará la conversión
// if(puntaje==1000){
//     console.log('Si es igual');
// }else{
//     console.log('No es igual');
// }

// // === Valida que coincidan perfectamente, deben ser iguales en valor y en tipo de variable
// if(puntaje===1000){
//     console.log('Si es igual');
// }else{
//     console.log('No es igual');
// }

// const logueado = true;

// if(logueado){
//     console.log('Estas logueado');
// }else{
//     console.log('Inicia sesión para continuar');
// }

// const edad = 18;

// if(edad >= 18){
//     console.log('Es legal');
// }else{
//     alert('NO es legal, i\'m calling the coops dude');
// }

// let puntaje;

// if(puntaje){
//     console.log(`Si hay puntaje y es de ${puntaje}`);
// }else{
//     console.log('No se encontro puntaje :(');
// }

// let dinero = 500;
// let totalCarrito = 600;
// let tarjeta  = true;

// if(dinero>totalCarrito){
//     console.log('Pago correcto');
// }else if(tarjeta){
//     console.log('Pagaste con tarjeta');
// }
// else{
//     console.log('Fondos Insuficientes');
// }

// OPERADOR && y || y el Ternario

// let dinero = 500;
// let totalCarrito = 600;
// let tarjeta  = true;

// if(dinero>totalCarrito || tarjeta){
//     console.log('Pago correcto');
// }else{
//     console.log('Fondos Insuficientes');
// }

// if(dinero>totalCarrito && tarjeta){
//     console.log('Pago correcto');
// }else{
//     console.log('Fondos Insuficientes');
// }

// let hora=8;

// if(hora>0 && hora<=12){
//     console.log('Buenos días');
// }else if(hora>12 && hora<=18){
//     console.log('Buenas tardes');
// }else if(hora>18 && hora<=24){
//     console.log('Buenas noches');
// }else{
//     console.log('Horario no valido');
// }

// let logueado = true;

// console.log(loogueado ? 'Si se logueo' : 'No se logueo'); //Es un if en una sola linea, ? es el if y : es el esle

// CONDICIONALES - SWITCH //

//Switch statement
// const metodoPago = 'efectivo';

// switch(metodoPago){

//     case 'efectivo':
//         hola();
//     break;

//     case 'cheque':
//         console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos`);
//     break;

//     case 'tarjeta':
//         console.log(`Pagaste con ${metodoPago} espere un momento`);
//     break;

//     default:
//         console.log('Método no valido');
//     break;

// }

// function hola(){
//     console.log('Pagaste con efectivo!');
// }

// LOOPS - FOR, WHILE y DO WHILE
// for(let i=0; i<10; i++){
//     console.log(`Numero: ${i}`);
// }

// const carrito = ['producto1', 'producto2', 'producto3'];
// for(let i=0; i<carrito.length;i++){
//     console.log(`Producto ${i}: ${carrito[i]}`);
// }

// let i=0;
// while(i<carrito.length){
//     console.log(`Producto ${i}: ${carrito[i]}`);
//     i++;
// }

// i = 10;
// do{
//     console.log(i);
//     i++
// }while(i<10);

// OTROS ITERADORES EN JAVASCRIPT //

//Un arreglo
// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];
// //Un arreglo con objetos
// const carrito = [
//     {id:1, producto:'Libro'},
//     {id:2, producto:'Camisa'},
//     {id:3, producto:'Disco'}
// ]
// //Un objeto
// let automovil = {
//     modelo: 'Camaro',
//     motor: 6.0
// }

// console.table(pendientes);

// for(let i=0;i<pendientes.length;i++){
//     console.log (pendientes[i]);
// }

// //Otra forma del For
// for(pendiente of pendientes){
//     console.log(pendiente); //Crea una variable llamada pendiente, y en cada iteración le asignará el valor del arreglo
// }

// for(producto of carrito){
//     console.log(producto); 
//     console.log(producto.id);
//     console.log(producto.producto);
// }

// //foreach
// pendientes.forEach(function(tarea){
//     console.log(`${tarea}`);
// });

// //El foreach también es compaitble con arrow functions
// pendientes.forEach(tarea => {
//     console.log(tarea); 
// });

// //foreach para objetos
// Object.values(automovil).forEach(auto => {
//     console.log(`Values del objeto: ${auto}`);
// });

// Object.keys(automovil).forEach(auto => {
//     console.log(`Keys del objeto: ${auto}`);
// });

// //Map crea una copia y lo retorna como un arreglo, tambien puedes no retornar nada e imprimira como si fuera un foreach
// let nuevoArreglo = pendientes.map(tarea => tarea);

// console.table(nuevoArreglo);

// //Map para objetos

// Object.values(automovil).map(auto => {
//     console.log(`Values del objeto: ${auto}`);
// });

// console.log('=============================');

// Object.keys(automovil).map(auto => {
//     console.log(`Keys del objeto: ${auto}`);
// });

// //NO ES ITERABLE, esto es debido a que es un objeto, no un arreglo
// for(info of automovil){
//     console.log(info);
// }
// for(info of Object.values(automovil)){
//     console.log(info);
// }

// SCOPE //
//Scope basicamente es la visibilidad que tiene una variable

// var musica = 'Rock'; //Una variable var siempre va a reescribirse aunque declares una local, al tener el mismo nombre se reemplazara

// if(musica){
//     var musica = 'Grunge';
//     console.log('Dentro del if'+musica);
// }
// console.log('Fuera del if'+musica);

// let musica2 = 'Rock'; //Una variable let no entrará en conflicto con otra variable local con el mismo nombre

// if(musica2){
//     let musica2 = 'Grunge';
//     console.log('Dentro del if'+musica2);
// }
// console.log('Fuera del if'+musica2);

// OBJECT DESTRUCTING //

// const cliente = {
//     nombre: 'Alejandra',
//     tipo: 'Premium',
//     datos:{
//         ubicacion:{
//             ciudad: 'Mexico',
//             pais: 'Mexico'
//         },
//         cuenta: {
//             desde: '10-12-2012',
//             saldo: 4000
//         }
//     },
//     gustos:{
//         musica:['trance','rock']
//     }
// }

// console.log(cliente);

// //Sin Destructing
// const nombreCliente = cliente.nombre;
// console.log(nombreCliente);

// //Usando Destructing
// let {nombre, tipo} = cliente; //Los nombres dentro de las llaves debe ser igual al nombre de la variable dentro del objeto
// console.log('===========');
// console.log(nombre);
// console.log(tipo);
// console.log('===========');

// //Otros ejemplos
// const ubibicacionCliente = cliente.datos.ubicacion;
// console.log(ubibicacionCliente);  
// //Con destructuring
// let {datos:{ubicacion}} = cliente;
// console.log(ubicacion);

// let {datos: {ubicacion: {ciudad}}} = cliente;
// console.log(ciudad);

// let {datos: {cuenta: {saldo}}} = cliente;
// console.log(saldo);

// let {gustos: {musica}} = cliente;
// console.log(musica);

// OBJECT LITERAL ENHACEMENT //
//Basicamente une objetos

// const banda = 'Metallica',
//     genero = 'Heavy Metal',
//     canciones = ['Master Of Puppets','Seek And Destroy','Enter Sandman'];

// //Forma anterior de hacerlo
// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

// //Forma nueva de hacerlo
// const metallica = {banda,genero,canciones} //Crea un objeto llamado metallica y asigna los valores anteriormente establecidos

// .filter .find y .reduce //

// const personas = [
//     {nombre: 'Juan',edad:20},
//     {nombre: 'Pablo',edad:50},
//     {nombre: 'Alejandra',edad:23, aprendiendo:'JavaScript'},
//     {nombre: 'Karen',edad:28},
//     {nombre: 'Miguel',edad:33}
// ]

// console.table(personas);

// //Obtener a las personas mayores de 25 años
// const mayores = personas.filter(persona => persona.edad >25);

// console.table(mayores);

// //Extraer información de Alejandra

// const alejandra = personas.find(persona => persona.nombre === 'Alejandra');

// console.log(alejandra);

// let {aprendiendo} = alejandra;

// console.log(aprendiendo);

// //reduce
// //Ejecuta una función reductora sobre cada elemento de un array, regresando un único elemento, reducir se refiere a sumar
// let total = personas.reduce((edadTotal, persona) => {
//     return edadTotal + persona.edad;
// },0);

// console.log(total);

// console.log(total/personas.length); //Regresa el promedio

// FETCH API //

descargarUsuarios(30); //Cantidad de resultados que queremos

function descargarUsuarios(cantidad){
    const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`; //La api, y al final va la cantidad de resultados que queramos

    // Llamado a Fetch
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos=>imprimirHTML(datos.results));
}

function imprimirHTML(datos){
    datos.forEach(usuario => {
        const li = document.createElement('li');

        const {name: {first}, name: {last}, picture: {medium}, nat} = usuario; //Extrae el nombre

        li.innerHTML = `
            nombre: ${first} ${last}
            País: ${nat}        
            Imagen: <img src="${medium}">
        `;

        document.querySelector('#app').appendChild(li);
    });
}

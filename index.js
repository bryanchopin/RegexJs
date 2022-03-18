function expresionesRegulares()
{
    //expresiones regulares en js

    var expresion1 = new RegExp('abc'); //des esta forma lo creamos desde el contructor
    var expresion2 = /abc/; // esta es otra forma de crearlo
    var parrafo = /text1 \/n texto2 /; //y creo que aqui esta comparando 2 expresiones



    //probar expresiones regulares
    var expresion1 = new RegExp('abc'); //definimos el patron para buscar la expresion regular
    console.log(expresion1.test('abcdef')); //de esta manera buscamos el patron por medio de la funcion test

    var expresion2 = /Hola Mundo/; //definimos patron
    console.log(expresion2.test('El primer programa es Hola Mundo')); // dentro de los parentesis colocamos la informacion a comprar
    // es casesensitive  nos arrojara un booleano



    //conjuntos de caracteres
    var expresion1 = /[0123456789]/;//aqui definimos un univeros de caracteres a evaluar
    var expresion1 = /[0-9a-zA-Z]/; //aqui colocamos valores del 0-9, a-z, A-Z. 
    //nos manda un true si por lo menos uno de ellos se encuentra en el universo y en la variable a evaluar
    console.log(expresion1.test('Sucedió en 1996'));// y aqui vemos si por lo menos 1 de ellos esta en la variable



    // shorcuts para  expresiones

    // Grupo | Descripción
    // ------|-----
    // \d  | Cualquier número
    // \w  | Cualquier letra o número
    // \s  | Cualquier espacio en blanco incluido tabs, salto de línea o similares
    // \D  | Cualquier carácter que no sea un número
    // \W  | Cualquier carácter que no sea alfanumérico
    // \S  | Cualquier carácter que no sea un espacio en blanco
    // .   | Cualquier carácter excepto nuevas líneas

    var expresion1 = /\d\d-\d\d-\d\d\d\d/;//aqui establecemos un patron de expresiones donde la de es cualquier numer
    //nn-nn-nnnn cualquier numero
    console.log(expresion1.test('29-junio-2007')); //arrojara un bool cuando se evalue la expresion que en este caso es false



    // repeticiones y negaciones
    var expresion1 = /[\d]/;  //shorcut estableciend que por lo menos exita un numero en la evaluacion
    console.log(expresion1.test('29-junio-2007'));//compara y lanza un true por que existe un numero

    var expresion2 = /[^01]/;//aqui coloca la negacion para indicar que no existan binarios en las comparacines
    console.log(expresion2.test('10101002100110001'));//lanza false, por que si exiten binarios
    



    //repeticion de patrones
    var expresion1 = /\d+/;//el simbolo de mas acepta uno o mas
    var expresion1 = /\d*/;//y este acepta uno o mas o cero elementos
    console.log(expresion1.test('2008')); //aqui resulta con * = true y con + = true pero si no existiera
    // nada seria * = true y + = false



    //patrones opcionales
    var expresion1 = /Hola mun?do/; //siempre arrojará un true ya que es opcional que este o no este el elemento a comparar
    console.log(expresion1.test('Hola mudo'));




    //conteo de patrones
    var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/; //esta colocando que solamente existiran
    // /d{1,2} 1 o 2 caracteres. es otra forma de definir patrones, basicamente los esta contando.
    //tenmos que tener cuidado con los espacios para definir los patrones
    // y si colocamos {2,} significa que por lo menos debe de existir 2 o  mas
    console.log(expresion1.test('27-06-2007 11:45')); //aqui saldrá un true por que el patron se cumple
}

function agrupamientoPatrones()
{
    //Patron no sensible no caseSensitive
    var expresion1 = /Hola Mundo/i;// el i es un operador que permite el uso de MAYUS y minus al momento de evaluar
    console.log(expresion1.test('Hola mundo'));


    //sub expresiones
    var expresion1 = /Woo+(hoo+)+/i; //aqui establecera que se pueden repetir que por lo menos exista uno de esos patrones
    //o que el patron se repita, fundiona con cadenas super largascomo la de abajo
    console.log(expresion1.test('Wooohooohooohooohoooooooohooohooohooohooohooo'));//arroja true ya que si existe


    //coincidencias y grupos
    var expresion1 = /\d+/.exec('Del año 1984');//nos mandará la informacion en forma de arreglo con la info d indice donde se encontro
    //y varias propiedades.  y esta evaluando \d+ 1 o mas numeros
    console.log("Hasta 1994".match(/\d+/)); //aqu es lo mismo simplemente que con el match lo hace directo desde la cadena

}

function estructurandoEvaluaciones()
{
    //limitando expresiones
    var expresion1 = /\bcat\b/; //limita a la expresion a solo cumplir lo que esta limitado con los \b""\b
    console.log(expresion1.test("cat")); //aroja un true por que solo existe el cat


    //seleccion de patrones
    var expresion1 = /pollo|res|pescado/; //limita a comparar con los valores que se encuentran ahi expresados con el | var | var
    console.log(expresion1.test('El cliente pidió tacos')); //arroja false por que no se encuntra en la seleccion



    //patrones de inicio y final
    var expresionInicio = /ˆAny/; //evalua si la expresion se encuentra al inicio de la evalucacion
    var expresionFin = /JavaScript$/; //evalua si la expresion se encuntra al final de la evaluacion
    var expIniciFin = /^Any|JavaScript$/; //evalua si esta uno o el otro al inicio o al final
    console.log(expIniciFin.test('Any app that can be imagined can be made in JavaScript')); 
    //evalua si se encuentra una o la otra. de inicio y de final




}

function explotandoRegExp()
{
    //metodo replace
    var mensaje = 'El cliente pidió sushi y comió su sushi, sushi, sushi, sushi';
    console.log(mensaje.replace(/sushi/g, 'tacos')); //remplaza el 1er string sushi por la palabra tacos
    // el valor g hace la busqueda de manera global
    console.log(mensaje.replace(/i/g, 'o')); //tambien podemos remplazar caracteres''



    // metodo search
    var mensaje = 'Estahistoriacontinuara';
    //  \W  Cualquier carácter que no sea alfanumérico
    //  \S Cualquier carácter que no sea un espacio en blanco
    console.log(mensaje.search(/\W/)); //nos buscara lo que deseamos dentro de una cadena
    //regresando el indice donde se encontro el resultado, si no hay incidencia regresa el -1


    //lastIndex
    var expresion1 = /y/g; //establecemos incidencias globales con y
    console.log(expresion1.lastIndex); //nos muestra el indice donde se encuentra la primera y
    expresion1.lastIndex = 6; //podemos reacomodar el lastIndex, osea cambiar la pocicion de este
    console.log(expresion1.lastIndex); //nos muestra un resultado de y apartir de la ultima ubicacion del lastIndex
    var coincidencia = expresion1.exec('sibr yfx sibr yfx'); //al momento de ejecutar el exec, tambien cambia el last index

    var expresion2 = /\d/g; //establecemos incidencias globales con cualquier numero
    console.log(expresion2.exec('Pedí 4 tacos y 1 agua')); //evaluamosa exp2 con la cadena y nos mueve el last index
    console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));//volvemos a evaluar y nos vuelve a lanzar el lazt index pero ahora nos arroja el 1
    expresion2.lastIndex = 0; //repocicionamos el last index para que no nos arroje un null
    console.log(expresion2.exec('Pedí 4 tacos y 1 agua')); //nos arroja el index 5 ya que volvimos a repocicionar


    //ciclos
    var mensaje = "Llegaban por montones, primero 10, después 20, después 35 y se duplicaban hasta llegar a 1000"; //establecemos el mensaje
    var patron = /\b(\d+)\b/g; //establecemos el patron el + es una o mas repeticiones
    var match; // aqui guardaremos la evaluacion
    while (match == patron.exec(mensaje)) { //exe nos arrojara la evaluacion
        console.log(match); //aqui vamos a imprimir la ultima inidencia del objeto
        console.log("Se encontró ", match[1], " en la posición: ", match.index); //y aqui colocamos
        //las incidencias, y como exec nos reccore el indice, podremos obtener las iteraciones y el indice
        //con las debidas funciones
    }
}

function main(){
     //probar expresiones regulares
     var expresion1 = new RegExp('abc'); //definimos el patron para buscar la expresion regular
     console.log(expresion1.test('abcdef') + " respuesta de conjunto de letras"); //de esta manera buscamos el patron por medio de la funcion test


     var expresion2 = /Hola Mundo/; //definimos patron
     console.log(expresion2.test('El primer programa es Hola Mundo') + " respuesta de formar una frase"); // dentro de los parentesis colocamos la informacion a comprar
     // es casesensitive  nos arrojara un booleano

    //conjuntos de caracteres
    var expresion3 = /[0123456789]/;//aqui definimos un univeros de caracteres a evaluar
    var expresion4 = /[0-9a-zA-Z]/; //aqui colocamos valores del 0-9, a-z, A-Z.
    //nos manda un true si por lo menos uno de ellos se encuentra en el universo y en la variable a evaluar
    console.log(expresion3.test('Sucedió en 1996') + " repuesta de conjunto de caracteres" );// y aqui vemos si por lo menos 1 de ellos esta en la variable

    var expresion5 = /\d\d-\d\d-\d\d\d\d/;//aqui establecemos un patron de expresiones donde la de es cualquier numer
    //nn-nn-nnnn cualquier numero
    console.log(expresion5.test('29-08-2007') + " RESPUESTA DE FECHA"); //arrojara un bool cuando se evalue la expresion que en este caso es false

    var expresion6 =  /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/;
    console.log(expresion6.test('bryan.oliveros.ibfk@gmail.com') + " RESPUESTA DE correo");

    var expresion6 = /^[0-9]*(\.?)[ 0-9]+$/;
    console.log(expresion6.test("3842938492"));

    // numero correo url identificador
}


function alerta(){
    let text = document.getElementById('text')
    document.getElementById("btn").onclick = function(){

         let correo = /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/;
         let url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \?=.-]*)*\/?$/;
         let numero = /^[0-9]*(\.?)[ 0-9]+$/;
         let identificador = /^[A-Za-z0-9\s]+$/;

        url.test(text.value) ?  alert(" LA EXPRESION ES UNA URL") : correo.test(text.value) ? alert(" LA EXPRESION ES UN CORREO") : numero.test(text.value) ? alert("LA EXPRESION ES UN NUMERO") : identificador.test(text.value) ? alert("LA EXPRESION ES UN IDENTIFICADOR") : alert("INGRESE OTRA EXPRESION");
    }
}

alerta();
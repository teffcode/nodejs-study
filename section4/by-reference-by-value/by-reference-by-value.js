/*
    PRIMITIVO:
    Tipo de dato que representa un sólo valor. No es un objeto.
    -> Number, String...

    -----

    VALOR:
    a = b

    a -> 0x001 
    b -> 0x002

    b tiene una nueva ubicación en memoria que contiene una copia del mismo valor.   
    Aquí estamos pasando el VALOR.

    -----

    REFERENCIA:
    object a = object b

    No se realiza una copia nueva del objeto, en realidad son 
    dos variables que apuntan a la misma posición en memoria

    -> Cuando se cambia el uno, se cambia el otro
*/

// PASS BY VALUE

function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

// PASS BY REFERENCE

function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);
// Function Statement

function greet() {
    console.log('Hi');
}
greet();

// First-Class Functions
// Las funciones en JS son de primera clase

function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// Function Expressions
// Éstas son posibles en JS porque las funciones son de 1ra clase
// 'HELLO', 3 -> son expresiones

var greetMe = function() { // función anónima
    console.log('Hi Teff');
}
greetMe();

// Función de primera clase

logGreeting(greetMe);

// Función de Expresión

logGreeting(function() {
    console.log('Hi Tefa');
});
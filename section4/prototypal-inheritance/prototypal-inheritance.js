/*
    FUNCTION CONSTRUCTORS
    Es una función normal que se usa para construir objetos.

    PROTOTYPAL INHERITANCE 
    Cada objeto tiene una propiedad que apunta a otro objeto:
    es el prototipo del objeto, es lo que hereda. 
    Es un objeto diferente que tendrá acceso a las propiedades 
    y métodos de ese otro objeto
*/

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname);
};

var Tefa = new Person('Tefa', 'Aguilar');
console.log(Tefa);
Tefa.greet();

var Tity = new Person('Tity', 'Aguilar');
Tity.greet();



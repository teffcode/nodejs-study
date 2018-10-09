// name / value

var person = {
    firstname: 'Teff',
    username: 'Teffcode',
    greet: function() {
        console.log('Hello, ' + this.firstname);
    }
}

person.greet();

console.log(person['firstname']);
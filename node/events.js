var events = require('events');
var util = require('util');

var Person = function(name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryan = new Person('ryan');
var people = [james, mary, ryan];

people.forEach(function(person) {
    person.on('speak', function(message) {
        console.log(person.name + ' said: ' + message);
    });
});

james.emit('speak', 'Hey what\'s up boi');
ryan.emit('speak', 'I\'m good bro');
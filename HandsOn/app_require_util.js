var events = require('events');
var util=require('util');

var Person= function(name){
    this.name=name;
};

util.inherits(Person, events.EventEmitter);

var james= new Person('james');
var jack= new Person('jack');
var amy= new Person('amy');
var people=[james, jack,amy];

people.map((p)=>{
    p.on('speak',function(msg){
        console.log(p.name+' said :'+msg);
    })
});

amy.emit('speak','hi ra mawa');

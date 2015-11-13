//Import events module
var events = require('events');

//create an event emitter object

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
   console.log('connection succesful.');
   //fire the data_received event
   eventEmitter.emit('data_received');
}

//Bid the connection event with the handler
eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});

//Fure the connection event
eventEmitter.emit('connection');

console.log('Program Ended.');

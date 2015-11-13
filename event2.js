var events = require('events');
var eventEmitter = new event.EventEmitter();

//listener 1
var listner1 = function listner1(){
   console.log('listner1 executed.');
}

var listnet2 = function listner2(){
   console.log('listner2 executed');
}

eventEmitter.addListener('connection', listner1);

eventEmitter.on('connection', listner2);

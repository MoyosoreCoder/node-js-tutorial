import { EventEmitter } from 'events';

// Create a new instance of EventEmitter
const myEmitter = new EventEmitter();

// Define the greetHandler function
function greetHandler() {
  console.log('Hello, welcome!');
}

// Define the goodByeHandler function
function goodByeHandler() {
  console.log('Goodbye, see you next time!');
}

// Listen for 'greet' event and execute greetHandler when the event is emitted
myEmitter.on('greet', greetHandler);

// Listen for 'goodbye' event and execute goodByeHandler when the event is emitted
myEmitter.on('goodbye', goodByeHandler);

// Emit the 'greet' event
myEmitter.emit('greet'); // This will call greetHandler and print "Hello, welcome!"

// Emit the 'goodbye' event
myEmitter.emit('goodbye'); // This will call goodByeHandler and print "Goodbye, see you next time!"

const events = require('events');
const eventEmitter = new events.EventEmitter();

const eventHandler = function eventFunc() {
    console.log('event');
    eventEmitter.emit('event_received');
}

eventEmitter.on('event_received', () => {
    console.log('1st event');
    eventEmitter.emit('event_2');
});

eventEmitter.on('event_2', () => {
    console.log('latest event');
});

eventHandler();
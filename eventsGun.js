'use strict';

const events = require('./Event-Emitter');
const fake = require('faker');
//const payload = require('./modules/payload');


events.on('event-detector', (payload)=>{
   events.emit('pickup', payload);
   events.emit('in-transit', payload);
   events.emit('delivered', payload);

})

require('./modules/pickup');    
require('./modules/in-transit');
require('./modules/delivered');


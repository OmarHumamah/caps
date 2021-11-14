'use strict';

const events = require("../Event-Emitter");
const payload = require("./payload");
const faker = require('faker');


class Event{
    constructor(payload, event, time){
        this.event= event;
        this.time = time ;
        this.payload = payload;
    }

}

events.on('delivered', (storeName)=>{
    let event = 'delivered';
    let time = faker.date.future();
    console.log(new Event(storeName, event, time));
})
    
events.emit('event-detector', payload);


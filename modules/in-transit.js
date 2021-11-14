'use strict'

const events = require("../Event-Emitter");
const faker = require('faker');


class Event{
    constructor(payload, event, time){
        this.event= event;
        this.time = time ;
        this.payload = payload;
    }

}

events.on('in-transit', (storeName)=>{
    let event = 'in-transit';
    let time = faker.date.soon();
    console.log(new Event(storeName, event, time));
    console.log(`DRIVER: delivered up ${storeName.orderID}`);
    console.log(`VENDOR: Thank you for delivering ${storeName.orderID}`);
})
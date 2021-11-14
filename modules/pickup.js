'use strict';

const events = require("../Event-Emitter");
const faker = require('faker');


class Event{
    constructor(payload, event, time){
        this.event= event;
        this.time = time ;
        this.payload = payload;
    }

}

console.log('------------');

events.on('pickup', pickup)

function pickup (storeName){
    let event = 'pickup';
    let time = new Date();
    console.log(new Event(storeName, event, time));
    console.log(`DRIVER: picked up ${storeName.orderID}`);
}


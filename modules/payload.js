'use strict';

const faker = require('faker');

let store = faker.company.companyName();
let orderID = faker.datatype.uuid();
let customer = faker.name.findName();
let address = faker.address.country();

let payload = {
    store,
    orderID,
    customer,
    address
}

module.exports = payload;

"use strict";

const { it, expect, beforeEach, afterEach } = require("@jest/globals");
const events = require("../Event-Emitter");
const payload = require("../modules/payload");
require('../modules/pickup');
require('../modules/in-transit');
require('../modules/delivered');
describe("test", () => {
  let consoleSpy;
  beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(()=>{
    consoleSpy = null
  })

  it("Check pickup event handler", () => {
    events.emit('pickup', payload)
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("Check in-transit event handler", () => {
    events.emit('in-transit', payload)
    expect(consoleSpy).toHaveBeenCalled();
  });
  it("Check delivered event handler", () => {
    events.emit('delivered', payload)
    expect(consoleSpy).toHaveBeenCalled();
  });
});

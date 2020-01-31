'use strict'

describe('Plane', function() {

  var plane;
  var airport;
  var plane2;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('can take off from an airport', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).toEqual([]);
    expect(airport.planes()).not.toContain(plane);
  });

  it('knows its own ID', function() {
    expect(plane.id()).toBe(true);
  });

  it('planes have unique IDs', function () {
    plane2 = new Plane();
    expect(plane).not.toEqual(plane2);
  });
});

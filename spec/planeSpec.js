'use strict'

describe('Plane', function() {

  var plane;
  var airport;

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

});

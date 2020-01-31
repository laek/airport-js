'use strict';

describe('Feature Test:', function(){
  var plane;
  var plane2;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  it('planes can land at an airport', function(){
    airport.receivePlane(plane);
    expect(airport.landedPlanes).toContain(plane);
  });

  it('planes can take off from an airport and confirm it is no longer at the airport', function() {
    plane2 = new Plane();
    airport.receivePlane(plane);
    airport.receivePlane(plane2);
    airport.takeOff(plane2);
    expect(airport.landedPlanes.length).toEqual(1);
    expect(airport.landedPlanes).not.toContaine(plane2);
  });
});

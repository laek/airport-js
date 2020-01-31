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
    expect(airport.planes()).toEqual([plane]);
  });

  it('planes can take off from an airport and confirm it is no longer at the airport', function() {
    airport.receivePlane(plane);
    airport.planeDepart(plane);
    expect(airport.planes().length).toEqual(0);
    expect(airport.planes()).not.toContain(plane);
  });
});

'use strict';

describe('Airport',function(){
  var airport;
  var plane;
  var plane2;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });
  it('can receive a plane that wants to land', function(){
    airport.receivePlane(plane);
    expect(airport.planes()).toContain(plane);
  });

  it('has no planes by default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('allows a plane to depart the airport', function() {
    airport.receivePlane(plane);
    airport.planeDepart(plane);
    expect(airport.planes()).not.toContain(plane);
  });

  it('is able to receive multiple planes', function() {
    plane2 = new Plane();
    airport.receivePlane(plane);
    airport.receivePlane(plane2);
    expect(airport.planes().length).toEqual(2);
    expect(airport.planes()).toContain(plane2);
  });

  it('knows the ID of the plane that has landed', function() {
    plane.land(airport);
    expect(airport.planes().id()).toEqual(plane.id);
  });
});

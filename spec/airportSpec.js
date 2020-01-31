'use strict';

describe('Airport',function(){
  var airport;
  var plane;

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
});

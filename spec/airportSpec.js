'use strict';

describe('Airport',function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });
  it('can receive a plane that wants to land', function(){
    airport.land(plane);
    expect(airport.landed_planes).toInclude(plane);
  });
});

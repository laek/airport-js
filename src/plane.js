'use strict';

class Plane {

  constructor() {
    this._loca
    this.id = function idGenerator() {
      return Math.random().toString(36).substr(2, 9);
    };
  };

  land(airport) {
    airport.receivePlane(this);
    this._location = airport;
  };

  takeOff(airport) {
    airport.planeDepart(this);
    this._location = "departed";
  };

};

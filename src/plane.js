'use strict';

class Plane {

  constructor() {
    this._location;
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

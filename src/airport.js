'use strict';

class Airport {

  constructor() {
    this.landedPlanes = [];
  };

  land(plane) {
    this.landedPlanes.push(plane);
  };
};

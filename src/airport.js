'use strict';

class Airport {

  constructor() {
    this.landedPlanes = [];
  };

  receivePlane(plane) {
    this.landedPlanes.push(plane);
  };

  planes() {
    return this.landedPlanes;
  };

  planeDepart(plane) {
    for(var i = 0; i < this.landedPlanes.length; i++) {
      if(this.landedPlanes[i] === plane) {
        this.landedPlanes.splice(i, 1)
      }
    }
  };
};

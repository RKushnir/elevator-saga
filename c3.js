{
  init: function (elevators, floors) {
    var elevator = elevators[0];

    elevator.on("idle", function() {
      for (var i = 0; i <= 4; i++) elevator.goToFloor(i);
    });
  },
  update: function (dt, elevators, floors) {}
}

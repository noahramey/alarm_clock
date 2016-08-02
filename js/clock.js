function Clock(currentTime) {
  this.currentTime = currentTime;
}

Clock.prototype.update = function() {
  this.currentTime = moment();
  $('.current-time').html((this.currentTime).format('HH:mm'));
};

Clock.prototype.checkAlarm = function(alarm) {
  var current = this.currentTime;
  if (current.isSame(alarm, 'minute')) {
    alert('beep beep');
  }
};

exports.clockModule = Clock;

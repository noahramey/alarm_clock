var Clock = require('./../js/clock.js').clockModule;

$(document).ready(function() {
  var newClock = new Clock(moment());
  newClock.update();
  console.log(newClock.currentTime._d);
  setInterval(newClock.update, 1000);

  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmTime = $('#time').val();
    var alarmMoment = moment(alarmTime, 'HH:mm');
    var name = $('#name').val();
    setInterval(function() {
      newClock.update();
      newClock.checkAlarm(alarmMoment);
    }, 1000);
  });
});

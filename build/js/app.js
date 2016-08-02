(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/clock.js":1}]},{},[2]);

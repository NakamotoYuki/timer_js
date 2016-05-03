(function () {
  'use strict'
  var timerElem1 = document.getElementById('timer1');
  var timerElem2 = document.getElementById('timer2');

  var passedTime = 0;
  var intervalId = null;

  setInterval(function(){
    timerElem1.textContent = new Date();
  }, 1000);

  function formatTime(date) {
    return zeroFill(date.getHours()) + ':' + zeroFill(date.getMinutes()) + ':' + zeroFill(date.getSeconds());
  }

  function zeroFill(num) {
    return ('0' + num).slice(-2);
  }

  function start(){
    if (intervalId !==null) {
      return;
    }

    intervalId = setInterval(function(){
      passedTime++;
      render();
    }, 1000);
  }

  function stop() {
    if (intervalId !== null){
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function reset() {
    stop();
    passedTime = 0;
    render();
  }

  function render() {
    var minutes = Math.floor(passedTime / 60);
    var seconds = passedTime % 60;
    timerElem2.textContent = zeroFill(minutes) + ':' + zeroFill(seconds);
  }

  document.getElementById('start').addEventListener('click', start);
  document.getElementById('stop').addEventListener('click', stop);
  document.getElementById('reset').addEventListener('click', reset);
  render();
}());

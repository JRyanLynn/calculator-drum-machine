$(document).ready(function () {
  $(".drum-pad").mousedown(function () {
    var letter = $(this).attr('data-key');
    var audio = document.querySelector(`audio[data-key="${letter}"]`);
    audio.currentTime = 0;
    audio.play();
    $("#display").html($(this).attr('name'));
  });
  $(".drum-pad").mouseup(function () {
    $("#display").empty();
  });


  $("body").keydown(function (e) {
    var letter = e.keyCode;
    $(`.drum-pad[data-key="${letter}"]`).addClass('pressed');
    var audio = document.querySelector(`audio[data-key="${letter}"]`);
    audio.currentTime = 0;
    audio.play();
    $("#display").html($(`.drum-pad[data-key="${letter}"]`).attr('name'));
  });

  $("body").keyup(function () {
    $('.drum-pad').removeClass('pressed');
    $("#display").empty();
  });


});
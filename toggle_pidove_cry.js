$(document).click(function() {
  var pidove_cry = $('#pidove_cry')[0]
  if (pidove_cry.paused)
    pidove_cry.play();
  else
    pidove_cry.pause();
})

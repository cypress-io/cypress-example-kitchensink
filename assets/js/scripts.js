// initialize highlight.js for JavaScript code highlighting
hljs.initHighlightingOnLoad();

$(function () {
  // initialize Bootstrap popovers
  $('[data-toggle="popover"]').popover()

  $('.action-div').on('dblclick', function(e) {
    $('.action-input-hidden').removeClass('hidden').focus()
    $(e.currentTarget).addClass('hidden')


  });


  // begin: draw dots on canvas on mouse click ---
  var canvas = document.getElementById('action-canvas');
  var context = canvas.getContext('2d');

  $('#action-canvas').on('click', function(e) {
    draw(e);
  });

  function draw(e) {
    var pos = getMousePos(canvas, e);
    posx = pos.x;
    posy = pos.y;
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(posx, posy, 5, 0, 2*Math.PI);
    context.fill();
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }
  // end -----------------------------------------


});




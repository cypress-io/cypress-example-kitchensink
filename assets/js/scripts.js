// initialize highlight.js for JavaScript code highlighting
hljs.initHighlightingOnLoad();

$(function () {
  // initialize Bootstrap popovers
  $('[data-toggle="popover"]').popover()

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

  // listen to dblclick to demonstrate logic on double click command
  $('.action-div').on('dblclick', function(e) {
    $('.action-input-hidden').removeClass('hidden').focus()
    $(e.currentTarget).addClass('hidden')
  });

  // listen to focus to demonstrate logic on focus command
  $('.action-focus').on('focus', function(e) {
    $(e.currentTarget).addClass('focus')
    $(e.currentTarget).prev().css('color', 'orange')
  });

  // listen to blur to demonstrate logic on blur command
  $('.action-blur').on('blur', function(e) {
    $(e.currentTarget).addClass('error')
    $(e.currentTarget).prev().css('color', 'red')
  });

  // listen to submit to demonstrate logic on submit command
  $('.action-form').on('submit', function(e) {
    e.preventDefault()

    $('<p>Your form has been submitted!</p>')
      .insertAfter(e.currentTarget)
      .css('color', '#20B520')
  });

  // hide this div so we can invoke show later
  $('.connectors-div').hide()


});




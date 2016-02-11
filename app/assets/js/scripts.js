// initialize highlight.js for JavaScript code highlighting
hljs.initHighlightingOnLoad();

$(function () {
  // initialize Bootstrap popovers
  $('[data-toggle="popover"]').popover()

  // begin: draw dots on canvas on mouse click ---
  var canvas = document.getElementById('action-canvas');

  var context;

  context = typeof canvas !== "undefined"
    && canvas !== null ? canvas.getContext('2d') : void 0;


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

  // listen to click on misc-table
  $('.misc-table tr').on('click', function(e) {
    $(e.currentTarget).addClass('info')
  });

  // listen to click on button in .as-table
  $('.as-table .btn').on('click', function(e) {
    e.preventDefault()
    $(e.currentTarget).addClass('btn-success').text('Changed')
  });

  // begin: Handle our route listeners -------------

  $('.network-btn').on('click', function(e) {
    e.preventDefault()
    getComment(e)
  });

  $('.network-post').on('click', function(e) {
    e.preventDefault()
    postComment(e)
  });

  $('.network-put').on('click', function(e) {
    e.preventDefault()
    putComment(e)
  });

  $('.fixture-btn').on('click', function(e) {
    e.preventDefault()
    getComment(e)
  });
  // end -----------------------------------------

  // begin: Handle our route logic -------------
  var root = 'http://jsonplaceholder.typicode.com';

  function getComment(e){
    $.ajax({
      url: root + '/comments/1',
      method: 'GET'
    }).then(function(data) {
      $('.network-comment').text(data.body)
    });
  };

  function postComment(e){
    $.ajax({
      url: root + '/comments',
      method: 'POST',
      data: {
        name: 'Using POST in cy.route()',
        email: 'hello@cypress.io',
        body: 'You can change the method used for cy.route() to be GET, POST, PUT, PATCH, or DELETE'
      }
    }).then(function(data) {
      $('.network-post-comment').text('POST successful!')
    });
  };

  function putComment(e){
    $.ajax({
      url: root + '/comments/1',
      method: 'PUT',
      data: {
        name: 'Using PUT in cy.route()',
        email: 'hello@cypress.io',
        body: 'You can change the method used for cy.route() to be GET, POST, PUT, PATCH, or DELETE'
      },
      statusCode: {
        404: function(data) {
          $('.network-put-comment').text(data.responseJSON.error)
        }
      }
    })
  }
  // end -----------------------------------------


  $('.ls-btn').on('click', function(e) {
    e.preventDefault()
    populateStorage(e)
  });

  // populate local storage to demonstrate cy.clearLocalStorage()
  function populateStorage() {
    localStorage.setItem('prop1', 'red');
    localStorage.setItem('prop2', 'blue');
    localStorage.setItem('prop3', 'magenta');
  }



  $('.cookies-btn').on('click', function(e) {
    e.preventDefault()
    setCookies(e)
  });

  // populate local storage to demonstrate cy.clearLocalStorage()
  function setCookies(e) {
    document.cookie = 'fakeCookie1=123ABC'
  }


});




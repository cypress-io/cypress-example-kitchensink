/* global hljs, $ */

// initialize highlight.js for JavaScript code highlighting
hljs.initHighlightingOnLoad()

// attach a listener to every element matching a selector
function on (selector, eventName, handler) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener(eventName, handler)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  // initialize Bootstrap popovers; Bootstrap 3's plugins are jQuery plugins,
  // so this is the one place the app still calls jQuery
  $('[data-toggle="popover"]').popover()

  // begin: draw dots on canvas on mouse click ---
  const canvas = document.getElementById('action-canvas')

  on('#action-canvas', 'click', (e) => {
    const rect = canvas.getBoundingClientRect()
    const context = canvas.getContext('2d')

    context.fillStyle = 'red'
    context.beginPath()
    context.arc(e.clientX - rect.left, e.clientY - rect.top, 5, 0, 2 * Math.PI)
    context.fill()
  })
  // end -----------------------------------------

  // listen to dblclick to demonstrate logic on double click command
  on('.action-div', 'dblclick', (e) => {
    const input = document.querySelector('.action-input-hidden')

    input.classList.remove('hidden')
    input.focus()
    e.currentTarget.classList.add('hidden')
  })

  // listen to contextmenu to demonstrate logic on right click command
  on('.rightclick-action-div', 'contextmenu', (e) => {
    const input = document.querySelector('.rightclick-action-input-hidden')

    input.classList.remove('hidden')
    input.focus()
    e.currentTarget.classList.add('hidden')
  })

  // listen to focus to demonstrate logic on focus command
  on('.action-focus', 'focus', (e) => {
    e.currentTarget.classList.add('focus')
    e.currentTarget.previousElementSibling.style.color = 'orange'
  })

  // listen to blur to demonstrate logic on blur command
  on('.action-blur', 'blur', (e) => {
    e.currentTarget.classList.add('error')
    e.currentTarget.previousElementSibling.style.color = 'red'
  })

  // listen to submit to demonstrate logic on submit command
  on('.action-form', 'submit', (e) => {
    e.preventDefault()

    const message = document.createElement('p')

    message.textContent = 'Your form has been submitted!'
    message.style.color = '#20B520'
    e.currentTarget.after(message)
  })

  // hide this div so we can invoke show later
  document.querySelectorAll('.connectors-div').forEach((div) => {
    div.style.display = 'none'
  })

  // listen to click on button in .as-table
  on('.as-table .btn', 'click', (e) => {
    e.preventDefault()
    e.currentTarget.classList.replace('btn-default', 'btn-primary')
    e.currentTarget.textContent = 'Changed'
  })

  // listen to input range for trigger command
  on('.trigger-input-range', 'change', (e) => {
    e.target.nextElementSibling.textContent = e.target.value
  })

  // begin: Handle our route listeners -------------
  on('.network-btn', 'click', (e) => {
    e.preventDefault()
    getComment()
  })

  on('.network-post', 'click', (e) => {
    e.preventDefault()
    postComment()
  })

  on('.network-put', 'click', (e) => {
    e.preventDefault()
    putComment()
  })

  on('.fixture-btn', 'click', (e) => {
    e.preventDefault()
    getComment()
  })
  // end -----------------------------------------

  // begin: Handle our route logic -------------
  // we fetch all data from this REST json backend
  const root = 'https://jsonplaceholder.cypress.io'

  // send form-encoded fields, as an HTML form would
  const comment = (verb) => new URLSearchParams({
    name: `Using ${verb} in cy.intercept()`,
    email: 'hello@cypress.io',
    body: 'You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE',
  })

  // update every match; pages without the element (such as Files,
  // which shares the fixture button) simply have nothing to update
  const setText = (selector, text) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = text
    })
  }

  function getComment () {
    fetch(`${root}/comments/1`)
    .then((response) => response.json())
    .then((data) => setText('.network-comment', data.body))
  }

  function postComment () {
    fetch(`${root}/comments`, { method: 'POST', body: comment('POST') })
    .then((response) => {
      if (response.ok) {
        setText('.network-post-comment', 'POST successful!')
      }
    })
  }

  function putComment () {
    fetch(`${root}/comments/1`, { method: 'PUT', body: comment('PUT') })
    .then((response) => {
      if (response.status === 404) {
        return response.json().then((data) => setText('.network-put-comment', data.error))
      }
    })
  }
  // end -----------------------------------------

  // populate localStorage and sessionStorage to demonstrate cy.clearLocalStorage()
  on('.ls-btn', 'click', (e) => {
    e.preventDefault()

    localStorage.setItem('prop1', 'red')
    localStorage.setItem('prop2', 'blue')
    localStorage.setItem('prop3', 'magenta')

    sessionStorage.setItem('prop4', 'cyan')
    sessionStorage.setItem('prop5', 'yellow')
    sessionStorage.setItem('prop6', 'black')
  })

  // populate local cookie to demonstrate cy.clearCookies()
  on('.set-a-cookie', 'click', (e) => {
    e.preventDefault()
    document.cookie = 'token=123ABC'
  })

  on('.utility-jquery li', 'click', (e) => {
    e.currentTarget.classList.add('active')
  })

  // show seconds from the unix epoch, for cy.clock() and cy.tick()
  on('#clock-div, #tick-div', 'click', (e) => {
    e.currentTarget.textContent = Date.now() / 1000
  })

  // show the names of files dropped on the drop zone, for .selectFile()
  on('.action-drop', 'dragover', (e) => {
    e.preventDefault()
  })

  on('.action-drop', 'drop', (e) => {
    e.preventDefault()

    const files = Array.from(e.dataTransfer.files)

    // ignore drops that carry no files, such as dragged text
    if (files.length) {
      e.currentTarget.textContent = `Dropped ${files.map((file) => file.name).join(', ')}`
    }
  })

  // a stand-in login that sets a session cookie, for cy.session()
  function showSessionStatus () {
    const loggedIn = document.cookie.split('; ').some((c) => c.startsWith('session_id='))

    document.querySelectorAll('.session-status').forEach((status) => {
      status.textContent = loggedIn ? 'Logged in' : 'Logged out'
    })
  }

  on('.session-login', 'click', (e) => {
    e.preventDefault()
    document.cookie = `session_id=${Math.random().toString(36).slice(2)}; path=/`
    showSessionStatus()
  })

  showSessionStatus()
})

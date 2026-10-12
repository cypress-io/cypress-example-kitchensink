/* global hljs */

hljs.initHighlightingOnLoad()

function on (selector, eventName, handler) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener(eventName, handler)
  })
}

// styles.css styles the .in, .open and .popover states these toggle
function setUpCollapse () {
  on('[data-toggle="collapse"]', 'click', (e) => {
    const button = e.currentTarget
    const target = document.querySelector(button.dataset.target)
    const open = target.classList.toggle('in')

    button.classList.toggle('collapsed', !open)
    button.setAttribute('aria-expanded', open)
  })
}

function setUpDropdowns () {
  const closeAll = (except) => {
    document.querySelectorAll('[data-toggle="dropdown"]').forEach((toggle) => {
      if (toggle.parentElement !== except) {
        toggle.parentElement.classList.remove('open')
        toggle.setAttribute('aria-expanded', false)
      }
    })
  }

  on('[data-toggle="dropdown"]', 'click', (e) => {
    e.preventDefault()

    const toggle = e.currentTarget
    const open = toggle.parentElement.classList.toggle('open')

    toggle.setAttribute('aria-expanded', open)
    closeAll(toggle.parentElement)
  })

  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-toggle="dropdown"]')) {
      closeAll()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAll()
    }
  })
}

function setUpPopovers () {
  let count = 0

  on('[data-toggle="popover"]', 'click', (e) => {
    const trigger = e.currentTarget
    const shown = document.getElementById(trigger.getAttribute('aria-describedby'))

    if (shown) {
      shown.remove()
      trigger.removeAttribute('aria-describedby')

      return
    }

    // moved to a data attribute so the browser doesn't also show it as a native tooltip
    if (trigger.hasAttribute('title')) {
      trigger.dataset.originalTitle = trigger.getAttribute('title')
      trigger.removeAttribute('title')
    }

    const placement = trigger.dataset.placement || 'right'
    const popover = document.createElement('div')
    const title = trigger.dataset.originalTitle

    popover.id = `popover${++count}`
    popover.className = `popover ${placement} fade in`
    popover.setAttribute('role', 'tooltip')
    popover.innerHTML = '<div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div>'
    popover.querySelector('.popover-content').textContent = trigger.dataset.content

    if (title) {
      popover.querySelector('.popover-title').textContent = title
    }
    else {
      popover.querySelector('.popover-title').remove()
    }

    // .popover is display: none until shown, and it can only be measured
    // once it is displayed and in the document
    popover.style.display = 'block'
    document.body.append(popover)

    const rect = trigger.getBoundingClientRect()
    const top = rect.top + window.scrollY
    const left = rect.left + window.scrollX
    const { offsetWidth: width, offsetHeight: height } = popover
    const positions = {
      top: [top - height, left + rect.width / 2 - width / 2],
      bottom: [top + rect.height, left + rect.width / 2 - width / 2],
      left: [top + rect.height / 2 - height / 2, left - width],
      right: [top + rect.height / 2 - height / 2, left + rect.width],
    }
    const [y, x] = positions[placement]

    popover.style.top = `${y}px`
    popover.style.left = `${x}px`
    trigger.setAttribute('aria-describedby', popover.id)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  setUpCollapse()
  setUpDropdowns()
  setUpPopovers()

  // The handlers below back the examples on the command pages: the specs act
  // on these elements and assert the state each handler leaves behind.
  const canvas = document.getElementById('action-canvas')

  on('#action-canvas', 'click', (e) => {
    const rect = canvas.getBoundingClientRect()
    const context = canvas.getContext('2d')

    context.fillStyle = 'red'
    context.beginPath()
    context.arc(e.clientX - rect.left, e.clientY - rect.top, 5, 0, 2 * Math.PI)
    context.fill()
  })

  on('.action-div', 'dblclick', (e) => {
    const input = document.querySelector('.action-input-hidden')

    input.classList.remove('hidden')
    input.focus()
    e.currentTarget.classList.add('hidden')
  })

  on('.rightclick-action-div', 'contextmenu', (e) => {
    const input = document.querySelector('.rightclick-action-input-hidden')

    input.classList.remove('hidden')
    input.focus()
    e.currentTarget.classList.add('hidden')
  })

  on('.action-focus', 'focus', (e) => {
    e.currentTarget.classList.add('focus')
    e.currentTarget.previousElementSibling.style.color = 'orange'
  })

  on('.action-blur', 'blur', (e) => {
    e.currentTarget.classList.add('error')
    e.currentTarget.previousElementSibling.style.color = 'red'
  })

  on('.action-form', 'submit', (e) => {
    e.preventDefault()

    const message = document.createElement('p')

    message.textContent = 'Your form has been submitted!'
    message.style.color = '#20B520'
    e.currentTarget.after(message)
  })

  // hidden so the connectors spec can demonstrate .invoke('show')
  document.querySelectorAll('.connectors-div').forEach((div) => {
    div.style.display = 'none'
  })

  on('.as-table .btn', 'click', (e) => {
    e.preventDefault()
    e.currentTarget.classList.replace('btn-default', 'btn-primary')
    e.currentTarget.textContent = 'Changed'
  })

  on('.trigger-input-range', 'change', (e) => {
    e.target.nextElementSibling.textContent = e.target.value
  })

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

  const root = 'https://jsonplaceholder.cypress.io'

  // form-encoded rather than JSON: the network spec checks the raw request body text
  const comment = (verb) => new URLSearchParams({
    name: `Using ${verb} in cy.intercept()`,
    email: 'hello@cypress.io',
    body: 'You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE',
  })

  // Files shares the fixture button but has no .network-comment, so a missing
  // element must be a no-op
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

  on('.ls-btn', 'click', (e) => {
    e.preventDefault()

    localStorage.setItem('prop1', 'red')
    localStorage.setItem('prop2', 'blue')
    localStorage.setItem('prop3', 'magenta')

    sessionStorage.setItem('prop4', 'cyan')
    sessionStorage.setItem('prop5', 'yellow')
    sessionStorage.setItem('prop6', 'black')
  })

  on('.set-a-cookie', 'click', (e) => {
    e.preventDefault()
    document.cookie = 'token=123ABC'
  })

  on('.utility-jquery li', 'click', (e) => {
    e.currentTarget.classList.add('active')
  })

  on('#clock-div, #tick-div', 'click', (e) => {
    e.currentTarget.textContent = Date.now() / 1000
  })

  // an element only receives drop events if dragover is cancelled
  on('.action-drop', 'dragover', (e) => {
    e.preventDefault()
  })

  on('.action-drop', 'drop', (e) => {
    e.preventDefault()

    const files = Array.from(e.dataTransfer.files)

    // dragged text or links carry no files; keep the prompt for those
    if (files.length) {
      e.currentTarget.textContent = `Dropped ${files.map((file) => file.name).join(', ')}`
    }
  })

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

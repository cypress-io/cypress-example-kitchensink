// A local stand-in for the parts of jsonplaceholder.cypress.io the specs and app use.
// It serves fixed data and never rate-limits, so repeated benchmark runs see the same
// responses and none of the external server's latency.

const users = Array.from({ length: 10 }, (_, i) => {
  const id = i + 1

  return {
    id,
    name: `User ${id}`,
    username: `user${id}`,
    email: `user${id}@example.com`,
  }
})

// jsonplaceholder has 5 comments for each of its 100 posts
const comments = Array.from({ length: 500 }, (_, i) => {
  const id = i + 1

  return {
    postId: Math.ceil(id / 5),
    id,
    name: `Comment ${id}`,
    email: `commenter${id}@example.com`,
    body: `Body of comment ${id}`,
  }
})

// jsonplaceholder returns a new resource's id as one past its built-in records,
// and doesn't keep what was posted
const NEXT_POST_ID = 101
const NEXT_COMMENT_ID = comments.length + 1

const filterByQuery = (items, query) => {
  let result = items

  for (const [key, value] of query) {
    if (key !== '_limit') {
      result = result.filter((item) => String(item[key]) === value)
    }
  }

  if (query.has('_limit')) {
    result = result.slice(0, Number(query.get('_limit')))
  }

  return result
}

const readBody = (req) => {
  return new Promise((resolve) => {
    let raw = ''

    req.on('data', (chunk) => {
      raw += chunk
    })

    req.on('end', () => {
      if (!raw) {
        return resolve({})
      }

      if ((req.headers['content-type'] || '').includes('application/json')) {
        return resolve(JSON.parse(raw))
      }

      resolve(Object.fromEntries(new URLSearchParams(raw)))
    })
  })
}

const send = (res, status, body) => {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' })
  res.end(body === undefined ? '' : JSON.stringify(body))
}

const collections = { users, comments }

// Answers the API's routes and returns true, or returns false so the caller can serve the
// request some other way
const handleApiRequest = async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const [resource, id] = url.pathname.split('/').filter(Boolean)

  if (!collections[resource] && resource !== 'posts') {
    return false
  }

  if (req.method === 'GET' && collections[resource]) {
    if (!id) {
      send(res, 200, filterByQuery(collections[resource], url.searchParams))

      return true
    }

    const item = collections[resource].find((record) => String(record.id) === id)

    item ? send(res, 200, item) : send(res, 404, {})

    return true
  }

  if (req.method === 'POST' && resource === 'posts' && !id) {
    send(res, 201, { ...await readBody(req), id: NEXT_POST_ID })
  }
  else if (req.method === 'POST' && resource === 'comments' && !id) {
    send(res, 201, { ...await readBody(req), id: NEXT_COMMENT_ID })
  }
  else if (req.method === 'PUT' && resource === 'comments' && id) {
    send(res, 200, { ...await readBody(req), id: Number(id) })
  }
  else {
    send(res, 404, {})
  }

  return true
}

module.exports = { handleApiRequest }

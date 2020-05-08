import { parse as urlParse } from 'url'

function removeHash(input) {
  const hashStart = input.indexOf('#')

  if (hashStart !== -1) {
    input = input.slice(0, hashStart)
  }

  return input
}

function getHash(url) {
  let hash = ''
  const hashStart = url.indexOf('#')

  if (hashStart !== -1) {
    hash = url.slice(hashStart)
  }

  return hash
}

export function parse(str, options = { decode: true }) {
  if (typeof str !== 'string') {
    return {}
  }

  str = str.trim()
    .replace(/^[?#&]/, '')

  if (!str) {
    return {}
  }

  const query = {}
  str.split('&')
    .forEach((pair) => {
      const [
        key,
        value,
      ] = pair.split('=')

      query[key] = options.decode ? decodeURIComponent(value) : value
    })

  return query
}

export function stringify(query, options = { encode: true }) {
  return Object.keys(query || {})
    .map((key) => {
      if (query[key] !== '' && query[key] !== undefined) {
        if (!options.encode) {
          return `${key}=${query[key]}`
        }

        return `${key}=${encodeURIComponent(query[key])}`
      }

      return null
    })
    .filter((params) => { return params })
    .join('&')
}

export function parseUrl(input, options = { decode: true }) {
  const url = removeHash(input)
    .split('?')[0] || ''
  const urlObject = urlParse(input)
  const query = parse(urlObject.query, options)

  return {
    url,
    query,
  }
}

export function stringifyUrl(input = {}, options = { encode: true }) {
  const { url, query } = parseUrl(input.url)
  const hash = getHash(input.url)

  let queryString = stringify(
    Object.assign({}, query, input.query),
    options
  )

  if (queryString) {
    queryString = `?${queryString}`
  }

  return `${url}${queryString}${hash}`
}

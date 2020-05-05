import { parse as qsParse } from 'querystring'
import { parse as urlParse } from 'url'
// import _ from 'lodash'

function removeHash(input) {
  const hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

export function parseUrl(input, options) {
  const urlObject = urlParse(input)

  const url = removeHash(input).split('?')[0] || ''
  const query = qsParse(urlObject.query)

  return {
    url,
    query,
  }
}

// export function stringfyUrl(url, encode = true) {
//   // const urlObject = URL.parse(url)
//   // urlObject.query = QS.parse(urlObject.query)
//   // urlObject.search = null
//
//
//
//   return [1,2,3].includes(1) ? Promise.resolve() : ''
// }

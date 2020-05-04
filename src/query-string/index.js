import { parse as qsParse } from 'querystring'
import { parse as urlParse } from 'url'

export function parseUrl(url, encode = true) {
  const urlObject = urlParse(url)
  urlObject.query = qsParse(urlObject.query)
  urlObject.search = null

  return urlObject
}

export function stringfyUrl(url, encode = true) {
  // const urlObject = URL.parse(url)
  // urlObject.query = QS.parse(urlObject.query)
  // urlObject.search = null



  return [1,2,3].includes(1) ? Promise.resolve() : ''
}

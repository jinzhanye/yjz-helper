import { parse as qsParse, stringify } from 'querystring'
import { parse as urlParse } from 'url'

// import _ from 'lodash'

function removeHash(input) {
  const hashStart = input.indexOf('#');
  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function getHash(url) {
  let hash = '';
  const hashStart = url.indexOf('#');
  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
}

export function parseUrl(input, options = { encode: true }) {
  const url = removeHash(input).split('?')[0] || ''
  const urlObject = urlParse(input)
  const query = qsParse(urlObject.query)

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
    null,
    null,
    options.encode
  );

  if (queryString) {
    queryString = `?${queryString}`;
  }

  return `${url}${queryString}${hash}`;
}

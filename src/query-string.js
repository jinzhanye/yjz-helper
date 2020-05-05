import { parse as qsParse, stringify as qsStringify, escape, unescape } from 'querystring'
import { parse as urlParse } from 'url'

// import _ from 'lodash'

const getSelf = (str) => str

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

export function parse(input, options = { decode: true }) {
  if (typeof input !== 'string') {
    return {};
  }

  input = input.trim().replace(/^[?#&]/, '');

  if (!input) {
    return {}
  }

  return qsParse(
    input,
    null,
    null,
    {
      decodeURIComponent: options.decode ? unescape : getSelf
    }
  )
}

export function stringify(input, options = { encode: true }) {
  return qsStringify(
    input,
    null,
    null,
    {
      encodeURIComponent: options.encode ? escape : getSelf,
    }
  );
}

export function parseUrl(input, options = { decode: true }) {
  const url = removeHash(input).split('?')[0] || ''
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
  );

  if (queryString) {
    queryString = `?${queryString}`;
  }

  return `${url}${queryString}${hash}`;
}

import { parse as parse$1 } from 'url';

function removeHash(input) {
  const hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input
}

function getHash(url) {
  let hash = '';
  const hashStart = url.indexOf('#');

  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash
}

const getJoinText = (query = {}, keyName, options = { encode: true }) => {
  return Object.keys(query)
    .map((key) => {
      const value = query[key];

      if (keyName) {
        key = keyName;
      }

      if (value !== '' && value !== undefined) {
        if (Array.isArray(value)) {
          return getJoinText(value, key, options)
        }

        if (!options.encode) {
          return `${key}=${value}`
        }

        return `${key}=${encodeURIComponent(value)}`
      }

      return null
    })
    .filter((params) => { return params })
    .join('&')
};

function parse(str, options = { decode: true }) {
  if (typeof str !== 'string') {
    return {}
  }
  if (typeof options === 'boolean') {
    options = {
      decode: options
    };
  }

  str = str.trim()
    .replace(/^[?#&]/, '');

  if (!str) {
    return {}
  }

  const query = {};
  str.split('&')
    .forEach((pair) => {
      const [
        key,
        value,
      ] = pair.split('=');

      const resultValue = options.decode ? decodeURIComponent(value) : value;

      if (query[key]) {
        if (Array.isArray(query[key])) {
          query[key].push(resultValue);
          return
        }

        query[key] = [query[key], resultValue];
        return
      }

      query[key] = resultValue;
    });

  return query
}


function stringify(query = {}, options = { encode: true }) {
  if (typeof options === 'boolean') {
    options = {
      encode: options
    };
  }

  const result = getJoinText(query, '', options);

  return result
}

function parseUrl(input, options = { decode: true }) {
  if (typeof options === 'boolean') {
    options = {
      decode: options
    };
  }

  const url = removeHash(input)
    .split('?')[0] || '';
  const urlObject = parse$1(input);
  const query = parse(urlObject.query, options);

  return {
    url,
    query,
  }
}

function stringifyUrl(input = {}, options = { encode: true }) {
  if (typeof options === 'boolean') {
    options = {
      encode: options
    };
  }


  const { url, query } = parseUrl(input.url);
  const hash = getHash(input.url);

  let queryString = stringify(
    Object.assign({}, query, input.query),
    options
  );

  if (queryString) {
    queryString = `?${queryString}`;
  }

  return `${url}${queryString}${hash}`
}

function formatVideoTime(time) {
  time /= 1000;
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor((time % 3600) / 60);
  const hours = Math.floor(time / 3600);
  const secondStr = seconds > 9 ? seconds : `0${seconds}`;
  const minuteStr = minutes > 9 ? minutes : `0${minutes}`;
  const hourStr = hours > 9 ? hours : `0${hours}`;

  if (hours) {
    return `${hourStr}:${minuteStr}:${secondStr}`
  }

  return `${minuteStr}:${secondStr}`
}

export { formatVideoTime, parse, parseUrl, stringify, stringifyUrl };

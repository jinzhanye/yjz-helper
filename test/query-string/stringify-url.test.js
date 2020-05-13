const queryString = require('../../src/query-string')

test('handles strings with query string', () => {

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar/'
  })).toEqual('https://foo.bar/')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar/',
    query: {}
  })).toEqual('https://foo.bar/')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar/#top',
    query: {}
  })).toEqual('https://foo.bar/#top')

  expect(queryString.stringifyUrl({
    url: '',
    query: {}
  })).toEqual('')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar?',
    query: {}
  })).toEqual('https://foo.bar')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar?foo=bar', query: {}
  })).toEqual('https://foo.bar?foo=bar')
});

test('stringify URL with a query string', () => {
  expect(queryString.stringifyUrl({
    url: 'https://foo.bar',
    query: { foo: 'bar' }
  })).toEqual('https://foo.bar?foo=bar')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar?',
    query: { foo: 'bar' }
  })).toEqual('https://foo.bar?foo=bar')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar/#top',
    query: { foo: 'bar' }
  })).toEqual('https://foo.bar/?foo=bar#top')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar',
    query: { foo: 'bar', a: 'b' }
  })).toEqual('https://foo.bar?foo=bar&a=b')

  // expect(queryString.stringifyUrl({
  //   url: 'https://foo.bar?a=b',
  //   query: { foo: ['bar', 'baz'] }
  // })).toEqual('https://foo.bar?a=b&foo=bar&foo=baz')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar?foo=baz',
    query: { foo: 'bar' }
  })).toEqual('https://foo.bar?foo=bar')
});

test('stringify URL with a query string encode', () => {
  expect(queryString.stringifyUrl({
    url: 'https://foo.bar',
    query: {
      scene: 'id=897SDFJKLJ&age=88',
      foo: 'bar',
    }
  })).toEqual('https://foo.bar?scene=id%3D897SDFJKLJ%26age%3D88&foo=bar')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar',
    query: {
      scene: 'id=897SDFJKLJ&age=88',
      foo: 'bar',
    }
  }, {
    encode: false,
  })).toEqual('https://foo.bar?scene=id=897SDFJKLJ&age=88&foo=bar')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar',
    query: {
      scene: 'id=897SDFJKLJ&age=88',
      foo: 'bar',
    }
  }, false)).toEqual('https://foo.bar?scene=id=897SDFJKLJ&age=88&foo=bar')
});

test('stringify URL from the result of `parseUrl` without query string', () => {
  const url = 'https://foo.bar';
  expect(queryString.stringifyUrl(queryString.parseUrl(url))).toBe(url)
});

// *** 不支持数组参数 ***
// test('stringify URL from the result of `parseUrl` with query string', () => {
//   const url = 'https://foo.bar?foo=bar&foo=baz';
//   expect(queryString.stringifyUrl(queryString.parseUrl(url))).toBe(url)
// });

// test('stringify URL from the result of `parseUrl` with query string that contains `=`', () => {
//   const url = 'https://foo.bar?foo=bar=&foo=baz=';
//   expect(
//     queryString.stringifyUrl(
//       queryString.parseUrl(url),
//       { encode: false })
//   ).toBe(url)
// });

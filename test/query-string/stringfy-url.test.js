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

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar?a=b',
    query: { foo: ['bar', 'baz'] }
  })).toEqual('https://foo.bar?a=b&foo=bar&foo=baz')

  expect(queryString.stringifyUrl({
    url: 'https://foo.bar?foo=baz',
    query: { foo: 'bar' }
  })).toEqual('https://foo.bar?foo=bar')
});

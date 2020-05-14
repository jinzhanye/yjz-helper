const queryString = require('../../src/query-string')

test('stringify', () => {
  expect(queryString.stringify({ foo: 'bar' }))
    .toBe('foo=bar')

  expect(queryString.stringify({
    foo: 'bar',
    bar: 'baz'
  }))
    .toBe('foo=bar&bar=baz')
});

test('URI encode', () => {
  expect(queryString.stringify({ 'scene': 'id=AE86' })).toBe('scene=id%3DAE86')

  expect(queryString.stringify({ 'scene': 'id=AE86' }, { encode: false })).toBe('scene=id=AE86')

  expect(queryString.stringify({ 'scene': 'id=AE86' }, false)).toBe('scene=id=AE86')
});

test('handle array value', () => {
  expect(queryString.stringify(
    {
      abc: '123',
      foo: ['bar', 'baz']
    },
  )).toBe('abc=123&foo=bar&foo=baz')

  expect(queryString.stringify(
    {
      abc: '123',
      foo: ['bar', 'baz', '456']
    },
  )).toBe('abc=123&foo=bar&foo=baz&foo=456')

  expect(queryString.stringify(
    {
      abc: '123',
      foo: ['id=bar', 'baz', '456']
    },
  )).toBe('abc=123&foo=id%3Dbar&foo=baz&foo=456')

  expect(queryString.stringify(
    {
      abc: '123',
      foo: ['id=bar', 'baz', '456']
    },
    false
  )).toBe('abc=123&foo=id=bar&foo=baz&foo=456')
});

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

// *** 不支持数组参数 ***
// test('no encode', () => {
//   expect(queryString.stringify(
//     { 'foo bar': 'baz faz' },
//     { encode: false, }
//   )).toBe('foo bar=baz faz')
// });

// test('handle array value', () => {
//   expect(queryString.stringify(
//     {
//       abc: 'abc',
//       foo: ['bar', 'baz']
//     },
//   )).toBe('abc=abc&foo=bar&foo=baz')
// });

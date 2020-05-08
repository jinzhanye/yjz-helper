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


// *** 不支持数组参数 ***
// test('URI encode', () => {
//   expect(queryString.stringify({ 'foo bar': 'baz faz' })).toBe('foo%20bar=baz%20faz')
// });

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

const queryString = require('../../src/query-string')

test('query strings starting with x', () => {
  expect(queryString.parse('?foo=bar'))
    .toEqual({
      foo: 'bar',
    })

  expect(queryString.parse('#foo=bar'))
    .toEqual({
      foo: 'bar',
    })
});

test('query strings normal', () => {
  expect(queryString.parse('foo=bar'))
    .toEqual({
      foo: 'bar'
    })

  expect(queryString.parse('&foo=bar&foo=baz'))
    .toEqual({
      foo: ['bar', 'baz']
    })

  expect(queryString.parse('&foo=bar&foo=baz&foo=bug'))
    .toEqual({
      foo: ['bar', 'baz', 'bug']
    })

  expect(queryString.parse('&foo=bar&foo=baz&foo=bug&bar=123'))
    .toEqual({
      foo: ['bar', 'baz', 'bug'],
      bar: '123'
    })

  expect(queryString.parse('foo=bar&key=val'))
    .toEqual({
      foo: 'bar',
      key: 'val'
    })
});

test('query strings decode', () => {
  expect(queryString.parse('scene=id%3D5bce88129d5cd50006b28dae&foo=bar'))
    .toEqual({
      scene: 'id=5bce88129d5cd50006b28dae',
      foo: 'bar',
    })

  expect(queryString.parse('scene=id%3D5bce88129d5cd50006b28dae&foo=bar', {
    decode: false,
  }))
    .toEqual({
      scene: 'id%3D5bce88129d5cd50006b28dae',
      foo: 'bar',
    })

  expect(queryString.parse('scene=id%3D5bce88129d5cd50006b28dae&foo=bar', false))
    .toEqual({
      scene: 'id%3D5bce88129d5cd50006b28dae',
      foo: 'bar',
    })
});

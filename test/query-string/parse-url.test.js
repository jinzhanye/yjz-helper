const queryString = require('../../src/query-string')

test('handles strings with query string', () => {
  expect(queryString.parseUrl('https://foo.bar#top?foo=bar'))
    .toEqual({
      url: 'https://foo.bar',
      query: {}
    })

  expect(queryString.parseUrl('https://foo.bar?foo=bar&foo=baz#top'))
    .toEqual({
      url: 'https://foo.bar',
      query: {
        foo: ['bar', 'baz']
      }
    })

  expect(queryString.parseUrl('https://foo.bar?foo=bar&foo=baz'))
    .toEqual({
      url: 'https://foo.bar',
      query: {
        foo: ['bar', 'baz']
      }
    })
});

test('handles strings not containing query string', () => {
  expect(queryString.parseUrl('https://foo.bar/')).toEqual({
    url: 'https://foo.bar/',
    query: {}
  });

  expect(queryString.parseUrl('https://foo.bar/#top')).toEqual({
    url: 'https://foo.bar/',
    query: {}
  });

  expect(queryString.parseUrl('')).toEqual({
    url: '',
    query: {}
  });
});

test('handles strings with query string that contain =', () => {
  expect(queryString.parseUrl('https://foo.bar?foo=baz=bar&foo=baz#top')).toEqual({
    url: 'https://foo.bar',
    query: {
      foo: ['baz=bar', 'baz']
    }
  });

  expect(queryString.parseUrl('https://foo.bar?foo=bar=&foo=baz=')).toEqual({
    url: 'https://foo.bar',
    query: { foo: ['bar=', 'baz='] }
  });
});


test('parseUrl with a query string decode', () => {
  expect(queryString.parseUrl('https://foo.bar?scene=id%3D897SDFJKLJ&foo=bar'))
    .toEqual({
      url: 'https://foo.bar',
      query: {
        scene: 'id=897SDFJKLJ',
        foo: 'bar',
      }
    })


  const temp = queryString.parseUrl('https://foo.bar?scene=id%3D897SDFJKLJ%26age%3D88&foo=bar')
  expect(temp)
    .toEqual({
      url: 'https://foo.bar',
      query: {
        scene: 'id=897SDFJKLJ&age=88',
        foo: 'bar',
      }
    })

  expect(queryString.parse(temp.query.scene))
    .toEqual({
      id: '897SDFJKLJ',
      age: '88'
    })

  expect(
    queryString.parseUrl(
      'https://foo.bar?scene=id%3D5bce88129d5cd50006b28dae&foo=bar',
      {
        decode: false,
      })
  ).toEqual({
    url: 'https://foo.bar',
    query: {
      scene: 'id%3D5bce88129d5cd50006b28dae',
      foo: 'bar',
    }
  })
});

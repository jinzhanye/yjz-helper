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
    query: {foo: ['bar=', 'baz=']}});
});


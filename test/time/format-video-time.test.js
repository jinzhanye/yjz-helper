const time = require('../../src/time')

test('视频时长', () => {
  expect(time.formatVideoTime(13600))
    .toBe('00:13')
});

let {formatMilliseconds} = require('../script');

describe('formatMilliseconds', () => {
  it('turns millis into "m:ss" format', () => {
    expect(formatMilliseconds(1000)).toBe("0:01");
    expect(formatMilliseconds(1500)).toBe("0:01");
    expect(formatMilliseconds((60 * 1000)+ 4500)).toBe("1:04");
    expect(formatMilliseconds((60 * 2000)+ 34500)).toBe("2:34");
  });
});
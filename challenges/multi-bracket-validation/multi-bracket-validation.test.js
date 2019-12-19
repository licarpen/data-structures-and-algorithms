const validateBrackets = require('./multi-bracket-validation');

describe('Multi-Bracket Validation', () => {
  it('validates a string containing a valid rounded brackets pair', () => {
    expect(validateBrackets('(Hello, world!)')).toBeTruthy();
  });
  it('validates a string containing a valid square brackets pair', () => {
    expect(validateBrackets('[]')).toBeTruthy();
  });
  it('validates a string containing a valid curly brackets pair', () => {
    expect(validateBrackets('{}')).toBeTruthy();
  });
  it('validates a string containing nested brackets', () => {
    expect(validateBrackets('([{}])')).toBeTruthy();
  });
  it('validates a string containing multiple bracket pairs in a row', () => {
    expect(validateBrackets('()[]{}')).toBeTruthy();
  });
  
  it('rejects a string containing an incomplete brackets pair', () => {
    expect(validateBrackets('({}')).toBeFalsy();
  });
  it('rejects a string containing bracket pairs that are not nested properly', () => {
    expect(validateBrackets('{[}]')).toBeFalsy();
  });
});

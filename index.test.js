const foo = require('./index');

test('Return right text', () => {
    expect(foo('Kyle')).toBe('Hello, Kyle!');
});

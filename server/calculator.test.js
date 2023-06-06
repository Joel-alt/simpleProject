const calculator = require('./calculator.js')

test('Adding two numbers', async () => {
    expect(calculator.sum(5, 5)).toStrictEqual(10)
})

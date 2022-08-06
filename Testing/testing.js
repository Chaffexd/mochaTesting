// In Mocha we group tests using the describe function and define tests using the it function
describe('Math', () => {
    describe('.min', () => {
      it('returns the argument with the lowest value', () => {
        
      })
    })
})

// Example test
// import assert here
const assert = require('assert');

describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3 + 4 === 7);
  });
});

// Node.js provides a library called assert to write expressive tests
// Example
const assert = require('assert');

describe('+', () => {
  it('returns the sum of its arguments', () => {

    assert.ok(3 + 4 === 7);
    
  });
});

// Import assert here
const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.ok(result === expected);
  });
});

// Import assert here
const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // assert.equal is the same as ok but more expressive
    assert.equal(result, expected);
  });
});

const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Documentation notes that you should always use strictEqual
    assert.strictEqual(result, expected);
  });
});

const assert = require('assert');

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = {a: 3, b: 4, result: 7};
		let sum = {a: 3, b: 4};

    // Exercise
		sum.result = sum.a + sum.b;

    // Verify
    // Use deepequal to check between 2 objects
    assert.deepEqual(sum, expected);
  });
});

const assert = require('assert');

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = [3, 4, 7];
		let sum = [3, 4];

    // Exercise
		sum.push(3 + 4);

    // Verify
    assert.deepEqual(sum, expected);
  });
});


const assert = require('assert');

describe('Numbers', () => {
  it('1 does not equal 2', () => {
    // Verify
    // notStrictEqual is another method to assert.ok
    assert.notStrictEqual(1, 2);
  });
});
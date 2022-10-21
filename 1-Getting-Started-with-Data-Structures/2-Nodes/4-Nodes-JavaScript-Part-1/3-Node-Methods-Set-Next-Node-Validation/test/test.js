console.log = function () {};
const {
    expect
} = require('chai');

describe('Node instance', function () {
    it('should validate the setNextNode class method', function () {
        expect(() => require('../Node.js'), 'Check your call to `.setNextNode()`. You should pass an argument that is not an instance of `Node`.').to.throw();
    });
});
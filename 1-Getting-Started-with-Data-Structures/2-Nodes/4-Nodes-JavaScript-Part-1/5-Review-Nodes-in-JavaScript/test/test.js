console.log = function () {};
const {
    expect
} = require('chai');
const rewire = require('rewire');

let userPrint = '';
console.log = function (logMsg) {
    userPrint += logMsg;
};

describe('Log', function () {
    it('should print out the ice cream nodes data properties in order', function () {
        let moduleImport;
        try {
            moduleImport = rewire('../Node.js');
        } catch (e) {
            expect(true, 'We\'re unable find your `Node` class. Try checking your code for syntax errors.').to.equal(false);
        }

        const expectedOutput = /Vanilla.*Berry Tasty.*Coconuts for Coconut/;
        const matchFound = !!userPrint.match(expectedOutput);
        expect(matchFound, 'Check that you are printing the `data` of `currentNode` on each iteration of the `while` loop. The condition should check that the `currentNode` is not `null` and is updated to be the `next` node of the previous `currentNode`.').to.equal(true);
    });
});
const {expect} = require('chai');
const rewire = require('rewire');
const sinon = require('sinon');

console.log = sinon.spy();

describe('Node instance', function () {
    it('should have the `next` property set to `null`', function () {
        let moduleImport;
        try {
            moduleImport = rewire('../Node.js');
        } catch (e) {
            expect(true, 'We\'re unable to export your class. Try checking your code for syntax errors.').to.equal(false);
        }

        let node;
        try {
            node = moduleImport.__get__('firstNode');
        } catch (e) {
            expect(true, 'Unable to find the `firstNode` variable.').to.equal(false);
        }

        // Check next is set to null
        expect(node.next, '`this.next` was not set to `null` in the constructor.').to.equal(null);

        // Check user printed string contains the next property
        expect(console.log.calledWith(node.next), 'The `next` property was not logged. The log in the terminal should match the next property.').to.equal(true);
    });
});
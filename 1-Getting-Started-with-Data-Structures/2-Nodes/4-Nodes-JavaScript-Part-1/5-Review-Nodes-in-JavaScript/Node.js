class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a member of the Node class.');
        }
    }
    getNextNode() {
        return this.next;
    }
}

let vanillaNode = new Node('Vanilla');
let strawberryNode = new Node('Berry Tasty');
let coconutNode = new Node('Coconuts for Coconut');
let currentNode = vanillaNode;

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);


while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.getNextNode();
};

module.exports = Node;
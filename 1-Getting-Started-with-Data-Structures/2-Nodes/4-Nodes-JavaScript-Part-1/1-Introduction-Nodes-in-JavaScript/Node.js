class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let firstNode = new Node('Test');
console.log(firstNode.data);
console.log(firstNode.next);

module.exports = Node;
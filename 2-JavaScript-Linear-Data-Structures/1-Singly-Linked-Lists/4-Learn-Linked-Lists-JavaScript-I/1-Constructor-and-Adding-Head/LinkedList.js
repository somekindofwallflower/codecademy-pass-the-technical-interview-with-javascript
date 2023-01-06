const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if(currentHead) {
      this.head.setNextNode(currentHead);
    }
  }
}

module.exports = LinkedList
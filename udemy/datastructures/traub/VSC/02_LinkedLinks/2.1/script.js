class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

class Node {
    constructor(value, next, previous) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

let ll = new LinkedList();
console.log(ll);
let myNode = new Node(100, null, null);
console.log(myNode);
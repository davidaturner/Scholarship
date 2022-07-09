/* Doubly linked list */

/* LinkedList constructor */
function LinkedList() {
    this.head = null;
    this.tail = null;
};

/* When work on functionality test either the head or the tail for validity */
LinkedList.prototype.list = function() {
    if (this.head != null) {
        var node = this.head;
        while(node != null) {
            console.log(node.value);
            node = node.next;
        }
    }
}

LinkedList.prototype.addToHead = function(value) {
    var node = new Node(value);
    if (this.head != null) {
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
    } else {
        this.head = node;
        this.tail = node;
    }
};

LinkedList.prototype.addToTail = function(value) {
    var node = new Node(value);
    if (this.head != null) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
};

/* Remove head function must return the value of the node removed. */

/* Remove tail function must return the value of the node removed. */

/* Node constructor */
function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
};

var ll = new LinkedList();
ll.addToHead("first");
ll.addToHead("second");
ll.addToHead("third");
ll.addToTail("first");
ll.addToTail("second");
ll.addToTail("third");

ll.list();
console.log(ll);

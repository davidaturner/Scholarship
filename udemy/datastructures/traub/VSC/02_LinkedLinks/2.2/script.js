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
LinkedList.prototype.removeHead = function() {
    if (this.head == null) return null;
    var value = this.head.value; 
    this.head = this.head.next;
    if (this.head != null) {
        this.head.previous = null; 
    } else {
        this.tail = null;    // set to empty list
    }
    return value;
}

/* Remove tail function must return the value of the node removed. */
LinkedList.prototype.removeTail = function() {
    if (this.tail == null) return null;
    var value = this.tail.value; 
    this.tail = this.tail.previous;
    if (this.tail != null) {
        this.tail.next = null; 
    } else {
        this.head = null;   // set to empty list
    }
    return value;
}

/* Node constructor */
function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
};

document.onreadystatechange = function () {
  if (document.readyState === 'started') {

    document.write("Ready! Please look at console.log.");

    var ll = new LinkedList();
    console.log("Adding three nodes...");
    ll.addToHead("first");
    ll.addToHead("second");
    ll.addToHead("third");
    console.log("Removing tail...");
    console.log(ll.removeTail());

    ll.list();
    console.log(ll);
  }
}

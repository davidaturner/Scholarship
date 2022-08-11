function LinkedList() {
    this.head = null 
    this.tail = null
}

LinkedList.prototype.insertHead = function(value) {
    var node = new Node(value)
    if (this.head == null) {
        this.head = node
        this.tail = node
    }
    else {
        node.next = this.head
        this.head.previous = node
        this.head = node
    }
}

LinkedList.prototype.display = function() {
    if (!this.head) print("No values found.")
    else {
        var node = this.head
        while(node) {
            console.log(node.value + "\n")
            node = node.next
        }
    }
}
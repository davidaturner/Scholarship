console.log("Hi")
function HashTable(size) {

    this.buckets = Array(size)
    this.numBuckets = this.buckets.length
}

HashTable.prototype.hash = function(key) {

    sum = 0;
    for(let i=0; i<key.length;i++) {
        // sum += key.charCodeAt(i)
        sum +=key[i].charCodeAt(0)
    }
    console.log(sum%this.numBuckets)
    return sum%this.numBuckets
}

HashTable.prototype.insert = function(key, value) {

    var index = this.hash(key)
    if (this.buckets[index] == null) {
        this.buckets[index] = new HashNode(key, value)
    } else {
        var currentNode = this.buckets[index];
        while(currentNode.next != null) {
            currentNode = currentNode.next
        }
        currentNode.next = new HashNode(key, value)
    }
}

function HashNode(key, value) {

    this.key = key
    this.value = value
    this.next = null
}

// console.log('helloworld'.charCodeAt(1)) //101
// console.log('e'.charCodeAt(0))          //101
// console.log('helloworld'.charCodeAt(0)) //104

var ht = new HashTable(30)
console.log(ht)
console.log(ht.hash("Becca"))
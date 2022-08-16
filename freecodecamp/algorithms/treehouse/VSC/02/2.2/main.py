# Linked Lists

# Nodes are self-referential objects.
# The definition of the Node includes a reference to a Node.
# The definition of a Node includes the Node itself.

class Node:

    def __init__(self, data = None):
        self.data = data
        self.next = None

    def __repr__(self):
        return f'<Node data: {self.data}>'
    def __str__(self):
        return f'{self.data}'

N1 = Node(10)
N2 = Node(20)
N3 = Node(30)

class LinkedList:

    def __init__ (self):
        self.head = None

    def __repr__ (self):
        nodes =[]
        current  = self.head
        while current:
            if current is self.head:
                nodes.append(f'[Head: {current.data}]')
            elif current.next is None:
                nodes.append(f'[Tail: {current.data}]')
            else:
                nodes.append(f'[{current.data}]')
            current = current.next
        return '->'.join(nodes)

    def isEmpty (self):
        return self.head == None
    
    def size (self):
        current = self.head
        size = 0
        while current:
            size += 1
            current = current.next
        return size

    # constant time operation
    def add(self, data):
        node = Node(data)
        node.next = self.head
        self.head = node

    # linear time operation.    
    def append(self, node):
        # Three ways to add Node to LL:
        # prepend/addToHead, append/addToTail(need Tail), and insert (anywhere in chain)
        return None

    def search(self, key):
        current = self.head
        while current:
            if current.data == key:
                return current
            else:
                current = current.next
        return None

    def insert(self, data, index):
        if index == 0:
            return self.add(data)

        node = Node(data)
        position = index
        current = self.head

        while position > 1:
            current = current.next
            position -= 1

        prev_node = current
        next_node = current.next

        prev_node.next = node
        node.next = next_node

    def remove(self, key):
        current = self.head
        previous = None
        found = False

        while current and not found:
            if current.data == key and current is self.head:
                found = True
                self.head = current.next
            elif current.data == key:
                found = True
                previous.next = current.next
            else:
                previous = current
                current = current.next
        return current






LL = LinkedList()

LL.add(10)
LL.add(20)
LL.add(30)

print(LL.size())
print(LL)
# print(LL.search(10))
LL.insert(5,3)
print(LL)
LL.remove(10)
print(LL)
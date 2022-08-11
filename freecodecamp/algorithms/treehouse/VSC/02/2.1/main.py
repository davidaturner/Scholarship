# Linked Lists

# Nodes are self-referential objects.
# The definition of the Node includes a reference to a Node.
# The definition of a Node includes the Node itself.

class Node:
    # Constructor
    def __init__(self, data):
        self.data = data
        self.next = None

    # The following used for logging, inspecting, debugging
    # if __str__ is not specified, str function calls repr.
    def __repr__(self):
        return f'Node: data = {self.data}'

N1 = Node(10)
N2 = Node(20)
N3 = Node(30)
# print(repr(N1))

class LinkedList:

    def __init__ (self):
        self.head = None

    def __repr__ (self):
        nodestr = "Nodes: "
        if self.head != None:
            current = self.head
            while current:
                nodestr = nodestr + f'{current.data} '
                current = current.next
        return nodestr

    def isEmpty (self):
        return self.head == None
    
    def size (self):
        current = self.head
        size = 0
        while current:
            size += 1
            current = current.next
        return size

    # Appending the new node at the end of list is linear time.
    # Prepending the new node at the beginning of list is constant time. Better 
    # performance.
    def add(self, value):
        node = Node(value)
        if self.isEmpty():
            self.head = node
        else:
            current = self.head
            while current:
                if not current.next:
                    current.next = node
                    break
                current = current.next

N1data = 10
N2data = 20
N3data = 30

LL = LinkedList()
LL.add(N1data)
LL.add(N2data)
LL.add(N3data)
print(LL.size())
print(LL)
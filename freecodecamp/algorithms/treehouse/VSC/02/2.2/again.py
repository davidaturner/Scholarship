# Another LinkedList
class Node:
    def __init__ (self, data = None):
        self.data = data
        self.next = None
    def __repr__(self):
        return f'Node({self.data})'
    def __str__(self):
        return f'{self.data}'

N1 = Node(10)
N2 = Node(20)
N3 = Node(30)

class Stack:
    def __init__(self):
        self.head = None

    # push
    def push(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node
        print(node)

    # pop
    def pop(self):
        if self.head == None:
            return None
        node = self.head
        self.head = self.head.next
        return node

    # peek
    def peek(self):
        return self.head
        
    # display
    def display(self):
        nodestr = ""
        current = self.head
        if (current != None):
            nodestr = "Nodes: "
            while current:
                nodestr += f'{current.data} '
                current = current.next
        return f'{nodestr}'

S = Stack()
S.push(10)
S.push(20)
S.push(30)
print(S.display())
print(S.pop())
print(S.display())

 
        
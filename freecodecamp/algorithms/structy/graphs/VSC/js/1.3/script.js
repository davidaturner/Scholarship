/*
In creating a depth first graph:
    Stack - push in front, pop front.

In create a breadth first graph:
    Queue - push in back, pop front.
*/

const given = {
    a : [b, c],
    b : [d],
    c : [e],
    d : [f],
    e : [],
    f : []
}

/* 
depth first 
    push a (down on the stack)
    pop a - print
    push b and c (for this example: push c then b)
    pop b - print
    push d
    pop d - print
    push f
    pop f - print
    pop c - print
    push e
    pop e - print

breathe first (FIFO)
    push a (in the back of the queue)
    pop a - print
    push b
    push c
    pop b - print
    push d
    pop c - print
    push e
    pop d - print
    push f
    pop e - print
    pop f - print

*/
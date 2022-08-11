// alert('Hello, World!')

const given = {
    a : [b, c],
    b : [d],
    c : [e],
    d : [],
    e : [f],
    f : [d]
}

/*
depth first transversal:
easy way to learn which nodes you can travel to

if 'a' was your starting node:
    then next node would 'b':
    followed by 'd': // not 'c':
    then next node would be 'c':
    followed by 'e':
    then 'b' and 'd'

NOTE: in this example. this algorithm would
never hit 'f', unless 'f' WAS the starting node!

in our example we chose the first edge as down. in
a depth first transversal you must then select next 
the node continuing to have a down edge (same direction)
until you cannot do so further.

breadth first transversal:
what neighbor to hit next is not as critical

if 'a' was your starting node:
    your next node could be either 'b' or 'c':
    selecting 'b':
    then next node would be 'c': // if selecting 'c' first, then 'b'


depth first vs breadth first
same number of nodes you can travel to
BUT in a different order!

*/

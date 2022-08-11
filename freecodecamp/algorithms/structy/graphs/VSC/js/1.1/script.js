/*
    What is a graph?
    A collection of nodes and edges.

    Nodes are any bits of data (also called vertex)
    Edges are any connections between nodes.

    So, a graph is a representation of the relationships (edges)
    between nodes.

    Directed(directional movement) vs undirected graph (2 way movement between nodes)

    Example:
        a > c
        b < e
        d < f
*/

const directed = {
    a: [b, c],
    b: [d],
    c: [e],
    d: [],
    e: [b],
    f: [d]
}
var given = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log("Breadth First - Queue - push/shift")
function breadthFirstPrint(graph, starting) {
    var queue = [ starting ]
    while (queue.length > 0) {
        let node = queue.shift()
        console.log(node)
        for(g of graph[node]) {
            queue.push(g)
        }
    }
    console.log(queue)
}
breadthFirstPrint(given, 'a')

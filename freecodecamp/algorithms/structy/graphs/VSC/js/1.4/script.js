var given = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// console.log("Depth First - Iterative - stack pop/push")
// function depthFirstPrint(graph, starting) {

//     var stack = [ starting ]
//     while (stack.length > 0) {
//         let node = stack.pop()
//         console.log(node)
//         for(g of graph[node]) {
//             stack.push(g)
//         }
//     }
//     // console.log(stack)
// }

console.log("Depth First - Recursive - no need for stack")
function depthFirstPrint(graph, starting) {

    console.log(starting)
    for(g of graph[starting]) {
        depthFirstPrint(graph, g)
    }
}

depthFirstPrint(given, 'a')


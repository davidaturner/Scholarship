//Reducer
//Usually a Pure function in that
//State is not mutated
function counter(state, action) {
    console.log({count: state.count})
    var nextstate = {
        count : 0
    }
    switch(action.type) {
        case 'add':
            console.log(action)
            nextstate.count = state.count + 1
            return nextstate
        case 'minus':
            console.log(action)
            nextstate.count = state.count - 1
            return nextstate
        case 'reset':
            console.log(action)
            return nextstate
        default:
            return state
    }
}

const state = { count : 0 }

//Store
const store = Redux.createStore(counter, state)

//UI/View
const counterUI = document.getElementById('counter')

//Callback function when any action
//is called. Subscribe
function render() {
    console.log("In render()")
    console.log(store.getState())
    let state = store.getState()
    counterUI.innerHTML = state.count.toString();
}
store.subscribe(render)

//Actions
document.getElementById('add')
.addEventListener('click', function() {
    // console.log({type: 'add'})
    store.dispatch({type: 'add'})
})

document.getElementById('minus')
.addEventListener('click', function() {
    // console.log({type: 'minus'})
    store.dispatch({type: 'minus'})
})

document.getElementById('reset')
.addEventListener('click', function() {
    // console.log({type: 'reset'})
    store.dispatch({type: 'reset'})
})


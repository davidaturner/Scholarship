// Setting up the Reducer
function handleclick(state, action) {
    console.log("Initial state: ", state)
    console.log("Action: ", action)
    var setState = {}
    switch(action.type) {
        case 'CLICKED_BUTTON':
            console.log('I clicked')
            setState = Object.assign({}, state, {
                           color: action.payload
                        });
            console.log("Proposed new state: ", setState)
            return setState
        default:
            return state
    }
}

// const state = {};
const state = {
    color: 'orange'
}

// Setting up Action Creator
const AC_CLICKED_BUTTON = () => {
   return {
        // Action object
        type: 'CLICKED_BUTTON',
        payload: 'red'
    }
}

function render(newstate) {
    console.log("I rendered the results!", newstate)
}
// The View invokes an AC creates action and sends the state and action 
// to the Dispatcher. The Dispatcher finds the appropriate
// Reducer and sends the state and action. The Reducer
// creates a new state which then updates/re-renders the View.
document.getElementById('theButton')
        .addEventListener('click', function() {
            var newstate = handleclick(state, AC_CLICKED_BUTTON())
            render(newstate)
        })

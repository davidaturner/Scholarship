// Setting up Action Creator
const AC_CLICKED_BUTTON = () => {
   return {
        // Action object
        type: 'CLICKED_BUTTON',
        payload: 'red'
    }
}

// const state = {};
const state = {
    color: 'orange'
}
                
// Setting up the Reducer
const button_action_reducer = (state, action) => {
    console.log("Initial state: ",state)
    var setState = {}
    switch (action.type) {
        case 'CLICKED_BUTTON':
        // return new state.
        setState = Object.assign({}, state, {
                           color: action.payload
                        });
        console.log("Proposed new state: ", setState)
        return setState;
        default:
            // return original state
            return state;
    }
}

const store = Redux.createStore(button_action_reducer, state)

// The View invokes an AC creates action and sends the state and action 
// to the Dispatcher. The Dispatcher finds the appropriate
// Reducer and sends the state and action. The Reducer
// creates a new state which then updates/re-renders the View.

console.log("Before dispatch: ", store.getState().color);
store.dispatch(AC_CLICKED_BUTTON());
console.log("After dispatch: ", store.getState().color);

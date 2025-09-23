const initialState = { count : 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {...state, count: state.count + action.amount};
        case "decrement":
            return {...state, count: state.count - action.amount};
        case "reset":
            return {...state, count: initialState.count};
        default:
            return state;
    }
}

export {reducer, initialState};
const initialState = {
    count: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'changeCount':
            return { ...state, count: action.count }
        default:
            return state
    }
}

export default reducer
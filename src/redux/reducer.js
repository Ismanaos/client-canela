const initialState = {
    talleres: [],
    proceso: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PROCESO':
            return {
                ...state,
                proceso: action.payload
            }
        case 'GET_TALLER':
            return {
                ...state,
                talleres: action.payload
            }
        case 'GET_SEARCH':
            return {
                ...state,
                talleres: action.payload
            }
        default:
            return state;
    }
}
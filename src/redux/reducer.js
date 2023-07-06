const initialState = {
    talleres: [],
    proceso: [],
    taller: {},
    historial: [],
    allTalleres: [],
    talleresNombre: []
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
        case 'GET_ID_TALLER':
            return {
                ...state,
                taller: action.payload
            }
        case 'GET_HISTORIAL':
            return {
                ...state,
                historial: action.payload
            }
        case 'GET_FECHA':
            return {
                ...state,
                allTalleres: action.payload
            }
        case 'GET_TALLERES':
            return {
                ...state,
                talleresNombre: action.payload
            }
        case 'GET_FILTER_BUSCADOR':
            return {
                ...state,
                talleres: action.payload
            }
        default:
            return state;
    }
}
import axios from 'axios';

export const getTaller = () => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/conseguir`);
        dispatch({
            type: 'GET_TALLER',
            payload: response.data
        });
    }
}

export const getProceso = () => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/proceso/conseguir`);
        dispatch({
            type: 'GET_PROCESO',
            payload: response.data
        });
    }
}

export const getSearch = (data) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/conseguir?data=${data}`);
        dispatch({
            type: 'GET_SEARCH',
            payload: response.data
        });
    }
}
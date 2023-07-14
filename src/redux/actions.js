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

export const getTallerBuscador = (nombre) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/conseguir?nombre${nombre}`);
        dispatch({
            type: 'GET_TALLER_BUSCADOR',
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

export const getFechaTalleres = (fecha1, fecha2) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/talleres?fecha1=${fecha1}&fecha2=${fecha2}`);
        dispatch({
            type: 'GET_FECHA',
            payload: response.data
        });
    }
}

export const getTalleres = () => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/talleresDash`);
        dispatch({
            type: 'GET_TALLERES',
            payload: response.data
        });
    }
}

export const getParams = (id) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/taller?id=${id}`);
        dispatch({
            type: 'GET_ID_TALLER',
            payload: response.data
        });
    }
}

export const filterBuscador = (payload) => {
    return {
        type: 'GET_FILTER',
        payload
    }
}

export const getHistorials = (id) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/historial/historial?id=${id}`);
        dispatch({
            type: 'GET_HISTORIAL',
            payload: response.data
        });
    }
}

export const getContabilidad = () => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/contabilidad/`);
        dispatch({
            type: 'GET_CONTABILIDAD',
            payload: response.data
        });
    }
}

export const getHistorialContabilidad = (id) => {
    return async dispatch => {
        const response = await axios.get(`http://localhost:3001/contabilidad/historial?id=${id}`);
        dispatch({
            type: 'GET_HISTORIAL_CONTABILIDAD',
            payload: response.data
        });
    }
}
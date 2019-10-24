export const ADD_DADO = 'ADD_DADO';
export const addDado = text => ({    
        type: ADD_DADO,
        text
    });

export const SET_DADO_TEXT =  'SET_DADO_TEXT';
export const setDadoText = text => ({
    type: SET_DADO_TEXT,
    text
});
import { ADD_DADO } from '../actions';

let nextId = 1;

const dadosListReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case ADD_DADO:
            // adicionar um todo
            const newdado = {
                id: nextId++,
                text: action.text
            }
            return [...state, newdado]
            
        default:
            return state;

    }
}

export default dadosListReducer;

import {SET_DADO_TEXT, ADD_DADO} from '../actions';


const INITIAL_STATE = {
    id: null,
    text: ''
};

const editingDadoReducer = (state = {INITIAL_STATE}, action) => {
    switch (action.type) {
            case SET_DADO_TEXT:
                return {
                    ...state,
                    text: action.text
                };
            case ADD_DADO:
                return INITIAL_STATE;
        default:
            return state;
    }
     
}
export default editingDadoReducer;
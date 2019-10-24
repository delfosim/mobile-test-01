import { combineReducers } from 'redux';

import dadosListReducer from './dadosListReducer';
import editingDadoReducer from './editingDadoReducer';

const rootReducer = combineReducers({
    dados: dadosListReducer,
    editingDado: editingDadoReducer
});

export default rootReducer;

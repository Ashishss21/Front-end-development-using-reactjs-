import { createStore } from 'redux';
import { Reducer, intialState } from './reducer';

export const configureStore= () =>{
    const store = createStore(
        Reducer,
        intialState
    );
    return store;
}
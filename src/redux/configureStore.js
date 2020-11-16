import { createStore,combineReducers } from 'redux';
import { Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import { Leaders } from './leaders';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const configureStore= () =>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
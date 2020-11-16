import { createStore,combineReducers } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes} from './dishes';
import {Comments} from './comments';
import {Promotions} from './promotions';
import { Leaders } from './leaders';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { IntialFeedback } from './forms';

export const configureStore= () =>{
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: IntialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
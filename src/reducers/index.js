
import { combineReducers } from 'redux';

const restaurantsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_RESTAURANTS':
            return action.payload;
        case 'FILTER_RESTAURANTS':
            return action.payload;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
});

export default rootReducer;


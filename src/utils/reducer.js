import { combineReducers } from 'redux';

const initialState = {
    activeListName: null, 
    activeListOptions: null,
    timerLength: 15000, 
    isCountingDown: false
}

const listReducer = (state=initialState, action) => {
switch (action.type) {

    case "SET_LISTDATA": {
    const listObj = action.payload;
        return {...state, 
            activeListName: listObj.listName, 
            activeListOptions: listObj.listOptions
        }
    }

    case "SET_TIMERLENGTH": {
        return {...state, 
            timerLength: action.payload
        }
    }

    case "SET_COUNTINGDOWN": {
        return {...state, 
            isCountingDown: true
        }
    }

    case "CLEAR_ACTIVELIST": {
        return {...state, 
            activeListName: null, 
            activeListOptions: null
        }
    }

    default: {
        return state;
    }

}
};

const rootReducer = combineReducers({
    list: listReducer
});
export default rootReducer
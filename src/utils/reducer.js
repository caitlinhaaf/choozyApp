import { combineReducers } from 'redux';

const initialState = {
    activeListCategory: null,
    activeListName: null,
    activeListId: null, 
    activeListOptions: null,

    activeListPosition: 0,
    currentWinner: null,
    timerLength: 15000, 
    isCountingDown: false
}

const listReducer = (state=initialState, action) => {
    switch (action.type) {

        case "SET_LISTDATA": {
        const listObj = action.payload;
            return {...state, 
                activeListCategory: listObj.listCategory,
                activeListName: listObj.listName, 
                activeListId: listObj.listId,
                activeListOptions: listObj.listOptions
            }
        }

        case "SET_LISTPOSITION": {
            return {...state, 
                activeListPosition: action.payload
            }
        }

        case "SET_CURRENTWINNER": {
            return {...state, 
                currentWinner: action.payload
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
                activeListCategory: null,
                activeListName: null, 
                activeListOptions: null,
                activeListId: null, 
                activeListPosition: 0
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
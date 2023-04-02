import { createStore } from 'redux'
import { initialData } from '../components/JsonApi';

//этот кейс нужен если бы мы асинхронно получали данные
export const ACTION_SET_DATA = (payload) => ({
    type: 'SET_DATA',
    payload
});
export const SET_CURRENT_PAGE = (page) => ({
    type: 'CURRENT_PAGE',
    payload: page
})
// export const ACTION_ADD_ITEM = (payload) => ({
//     type: 'ADD_ITEM_TO_BIN',
//     payload
// });
// export const ACTION_DELETE_ITEM = (payload) => ({
//     type: 'DELETE_ITEM_FROM_BIN',
//     payload
// });

const initialState = {
    data: [...initialData],
    bin: []

};


const dataReducer = (state, action) => {

    switch (action.type) {
        //этот кейс нужен если бы мы асинхронно получали данные
        case "ADD_CATALOG":
            return { ...state, data: action.data, totalCount: action.totalCount };

        case 'CURRENT_PAGE':
            return { ...state, currentPage: action.payload }
        // case "ADD_ITEM_TO_BIN":
        //     return { ...state, bin: [...state.bin, action.payload] };
        // case "DELETE_ITEM_FROM_BIN":
        //     return { ...state, bin: state.bin.filter(item => item.id !== action.payload.id) };
        default:
            return state
    }

};



const devtoolsExttension = window.__REDUX_DEVTOOLS_EXTENSION__;
const store = createStore(dataReducer, initialState, devtoolsExttension());



export default store

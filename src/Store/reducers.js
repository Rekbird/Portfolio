import { combineReducers } from 'redux';

const _ = require('lodash');

const Reducers = combineReducers(
    {
        setAuthorised
    }
);

function setAuthorised(state = false, action){
    switch(action.type) {
        case "setAuthorised":
            return {
                Authorised: action.Authorised
            };
        default:
            return state;
    }
}


export default Reducers;

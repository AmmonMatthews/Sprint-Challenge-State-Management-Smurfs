import {FETCHING_SMURF_START,FETCHING_SMURF_SUCCESS,
    FETCHING_SMURF_FAILURE } from "../actions"

const initialState = {
    isLoading: false,
    smurfs: null,
    error: ''
}


export const smurfsReducer = (state = initialState, action) => {
    switch(action.types) {
        case FETCHING_SMURF_START:
            return{
                ...state,
                isLoading:true
            }
        case FETCHING_SMURF_SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurfs: action.payload
            }
        case FETCHING_SMURF_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                    isLoading: false
                    
                }
        default:
            return state;
    }

}
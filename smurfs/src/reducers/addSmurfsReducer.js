import { ADD_SMURF_START, ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE,} from "../actions/index";

const initialState = {
    isFetchig: false,
    smurfs: null,
    error: ''

}


export const addSmurfsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SMURF_START:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: true,
                error: ''
              };

        case ADD_SMURF_SUCCESS:
                return {
                  ...state,
                  smurfs: [...state.smurfs, action.payload],
                  isFetching: false,
                  error: ''
                };
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
                    };

        default:
            return state
    }
}
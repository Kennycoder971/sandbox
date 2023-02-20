import { Action } from "../actions";

interface Repo {
    loading:boolean;
    data:string[];
    error:string | null | undefined;
}

const initialState = {
    loading:false,
    error: null,
    data:[]
}

const reducer = ((state:Repo = initialState, action: Action):Repo => {
    switch (action.type) {
        case 'loading':
            return {loading:true, data:[], error: null}
        case 'success':
            return {loading:false, data:action.payload, error: null}
        case 'error':
            return {loading:false, data:[], error: action.payload}
        default:
            return state;
    }
})

export default reducer
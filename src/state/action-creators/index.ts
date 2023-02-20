import axios from "axios";
import { ActionType } from "../action-types";
import {Action} from '../actions'
import { Dispatch } from "redux";



export const searchRepositories = (term:string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })

        try {

            const {data} = await axios.get('http://registry.npmjs.org/-/v1/search',{
                params:{
                    text:term
                }
            })

            const names = data.objects.map((result:any) => result.package.name)
            dispatch({
                type:ActionType.SUCCESS,
                payload:names
            })
        } catch (error:any) {
            dispatch({
                type:ActionType.ERROR,
                payload:error.message
            })
        }
    }
}
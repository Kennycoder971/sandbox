import { ActionType } from "../action-types"

interface LoadingAction {
    type:ActionType.LOADING
}
interface SuccessAction {
    payload:string[],
    type:ActionType.SUCCESS
}
interface ErrorAction {
    payload:string,
    type:ActionType.ERROR
}

export type Action = LoadingAction | ErrorAction | SuccessAction 
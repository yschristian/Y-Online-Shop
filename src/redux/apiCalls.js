import { publicRequest } from "../requestMethod"
import { loginFalure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch,user) =>{
    dispatch(loginStart())
    try {
            const res = await publicRequest.post('/user/login',user)
            dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFalure())
    }
}
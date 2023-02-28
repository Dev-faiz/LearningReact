import { configureStore} from '@reduxjs/toolkit'
const initialState = {value:{userName : 'user'}}
const userSlice = createSlice({
    name : 'user',
    initialState ,
    reducers : {
        loging : (state , action)=>{
            state.value.userName = action.payload.userName;
        } ,
        logout : (state, action)=>{
            state = initialState 
        }
    }
})

export const {login , logout } = userSlice.actions ;
export const store = configureStore({
    reducer : {
        user : userSlice.reducers
    }
});
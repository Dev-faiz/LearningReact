import { useState } from "react";
import {login, logout} from './store';
import { useDispatch } from "react-redux/es/exports";

export const Login = ()=>{
  const {newUserName , setNetUserName } = useState("");

    return <div>
        <h1>This is login page</h1>
        <input onChange={(e)=>{e.target.value}}></input>
        <button onClick={dispatch(login(newUserName))}>LogIn</button>
        <button>LogOut</button>
  </div>
}
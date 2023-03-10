import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup';

export const Form = ()=>{
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Full Name is required"),
        Email: yup.string().email().required("Email is required"),
        Age: yup.number().positive().integer().min(15).required("Age is required"),
        Password: yup.string().min(4).max(20).required("Password is required"),
        CPassword: yup.string().oneOf([yup.ref("Password"),null]).required("Confirm Password is required")
    })
    const {register , handleSubmit , formState:{errors}} = useForm( { resolver : yupResolver(schema)} );
    const onSubmit = (data)=>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")} /><br/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("Email")}/><br/>
            <p>{errors.Email?.message}</p>
            <input type="number" placeholder="Age..." {...register("Age")}/><br/>
            <p>{errors.Age?.message}</p>
            <input type="text" placeholder="Password..." {...register("Password")}/><br/>
            <p>{errors.Password?.message}</p>
            <input type="text" placeholder="Confirm Password..." {...register("CPassword")}/><br/>
            <p>{errors.CPassword?.message}</p>
            <input type="submit" name="Submit" value="Submit" />
        </form>
    )
}
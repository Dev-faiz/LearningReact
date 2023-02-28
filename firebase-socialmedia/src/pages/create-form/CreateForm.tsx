import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc , collection } from 'firebase/firestore'
import {db , auth } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import {useNavigate} from 'react-router-dom'

export const CreateForm = () => {
    const navigate = useNavigate();
    
    const [user] = useAuthState(auth);
    const schema = yup.object().shape({
        title: yup.string().required("add title"),
        description: yup.string().required("add description"),
    })
    const { register, handleSubmit , formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    })
    const onCreatePost = async (data: CreateFormData) => {
       await addDoc(postRef , {
        title : data.title , 
        description : data.description,
        user : user?.displayName ,
        userId : user?.uid 
       
       })
       navigate('/')
    }
    const postRef =  collection( db , "posts")
    

   
    return <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder='title' {...register("title")} />
        <p>{errors.title?.message}</p>
        <textarea placeholder='description' {...register("description")} />
        <p>{errors.description?.message}</p>
        <input type='submit'  />
    </form>
}

interface CreateFormData{
    title : string ,
    description : string
}
import { async } from '@firebase/util';
import {getDocs , collection} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {db} from '../../config/firebase'
import { Post } from './Post';
export const Main = () => {
    const [postList , setPostList] = useState<Post[] | null>(null);
    const postRef = collection(db , "posts");

    const getPost = async ()=>{
        const snapshot = await getDocs(postRef);
        setPostList(snapshot.docs.map((doc)=> ({...doc.data() , id : doc.id}) ) as Post[] );
    }
    useEffect(()=>{
        getPost();
    } , []);
    return <div>
        {
             postList?.map((post)=> <Post post={post}/> )
        }
    </div>;
    
}
export interface Post {
    description : string 
    id : string 
    title : string
    user : string
    userId : string
}
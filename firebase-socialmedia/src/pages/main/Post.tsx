import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../config/firebase'
import { Post as IPost } from './Main'
// import {useNav}

export const Post = (props: Props) => {
    const likeRef = collection(db, "likes");
    const [user] = useAuthState(auth);
    const { post } = props;
    const likeDoc = query(likeRef, where("postId", "==", post.id))
    const onLikePost = async () => {  await addDoc(likeRef, { userId: user?.uid, postId: post.id }) }
    const getLikes = async () =>{ 
        const  data = await  getDocs(likeRef) ;
        setLikeCount(data.docs.map(doc => ({userId: doc.data().userId})))
    }
    const [ Likes , setLikeCount] = useState<Like[] | null>(null);
   useEffect(()=>{
    getLikes();
   },[])

   const hasUserLiked = Likes?.find((like )=> like.userId === user?.uid  ) ;

    return <div>
        <div>
            <h1 className="title"> {post.title}</h1>
            <div className="title">description : {post.description}</div>
        </div>
        <div>
            <p>@{post.user}</p>
          <button onClick={onLikePost}>{ hasUserLiked ? <>&#128077;</> :  <>&#128078;</> }</button> 
          {Likes && <p>likes: {Likes?.length}</p>}
        </div>
    </div>
}

interface Props {
    post: IPost;
}

interface Like{
    userId: string;
   
}
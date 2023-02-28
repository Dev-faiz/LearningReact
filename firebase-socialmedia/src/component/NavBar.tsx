import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from "../config/firebase";


export const NavBar = () => {
    const [user] = useAuthState(auth);
    const signOutUser = async () =>{
         const result =   await auth.signOut();
         console.log(result);
    }
    return <div className='navbar'>
        <div className='links'>
            <Link to='/'>Main</Link>
           { !user ?  <Link to='/login'>Login</Link> :  <Link to='/createpost'>create post</Link>  }
           
        </div>
        { user &&
        <div className='user'>
            <p>{auth.currentUser?.displayName}</p>
            <img src={auth.currentUser?.photoURL || ""} />
            <button onClick={signOutUser}>Logout</button>
        </div>
        }
        

    </div>

}
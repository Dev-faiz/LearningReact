import { Link } from "react-router-dom" ;
export const NavBar = ()=>{
    return <div>
    <Link to={"/"}></Link>
    <Link to={"/menu"}>Menu</Link>
    <Link to={"/"}>Home</Link>
    <Link to={"/contact"}>Contact</Link>
  </div>
}
import { useQuery } from "@tanstack/react-query"
import  Axios  from "axios"

export const Home = ()=>{
    const { data:catData , isLoading  , refetch} = useQuery(["cat"], () =>
        {
       return  Axios.get("https://catfact.ninja/fact").then((res)=> res.data) 
    } )
    console.log(catData);
    if(isLoading){
        return <h1>Loading...</h1>
    }
    return <h1>This is Home Page <br></br>{catData?.fact} <br></br>
    <button onClick={refetch}>updateData</button>
    </h1>
}
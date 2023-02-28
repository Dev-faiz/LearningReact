export const Person = (props: Props) => {
    return <div>

        <h1> Name :   {props.name}</h1>
        <h1>  Age   {props.age}</h1>
        <h1>  Martial Status  {props.isMarried ? "is" : "is not "} Married</h1>
        {props.friends.map((f)=>{
            return <h1>{f}</h1>
        })}
        <h1>{props.country}</h1>
        
    </div>
}
interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: counteries 
}

export enum counteries {
    India="INDIA" , USA="USA"
}
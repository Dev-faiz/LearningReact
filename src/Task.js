export const Task = (props) => {

    return <div style={props.complete ? { backgroundColor: 'green' } : { backgroundColor: 'red' }}>
        <h1  >{props.taskName}</h1>
        <button onClick={() => { props.setToDoList(props.toDoList.map((e) => {return e.id === props.id ?  { ...e, complete: true } : e })) }}> complete</button>
        <button onClick={() => { props.setToDoList(props.toDoList.filter((e) => { return e.id !== props.id })) }}>x</button>
    </div>


}

export default Task;
// three diffrent stages in react for life cycle 

/*
    mounting is  appearing the component is called mounting 
    unmounting is disappearing component is called unmounting 
    updating chaging the state is called unmounting 


*/


import './App.css';
import { useState } from 'react';
import './Task.js' ;
import Task from './Task.js';

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={(e) => { setNewTask(e.target.value) }}></input>
        <button onClick={() => {
          setToDoList([...toDoList,  {id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1, taskName: newTask , complete : false }])
        }}>Button</button>
      </div>
      <div className='list'>
        {toDoList.map((task) => {
          return <Task taskName={task.taskName} id={task.id} setToDoList={setToDoList} toDoList={toDoList} complete= {task.complete} />
        })}
      </div>
    </div>
  );
}
export default App;

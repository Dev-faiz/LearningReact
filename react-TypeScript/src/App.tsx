// import React, { useState } from 'react';
// import {Person} from './Person'
// import { counteries } from './Person';
// import { ReactDOM } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import {Home} from './Home' ;
import {Contact} from  './Contact' ;
import {Menu} from "./Menu" ;
import { NavBar } from './NavBar';
import {Login} from './Login' ;
import { Provider } from 'react-redux';
import { store } from './store';

function App(){
  return <div className='App'>
    <Provider store={store}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </Provider>
  </div>
}

// function App() {

//   const [state , setState] = useState<string>("");
  
//   return (
//     <div className="App">
//       <input type="text" onChange={(e)=>{setState(e.target.value)}}/>
//       <button onClick={()=>setState(state)}>change Name</button>
//       <Person 
//       name={state}
//       age={25}
//       isMarried={true}
//       friends={["Usama" , "Shariq" , "Ameer"]}
//       country={counteries.India}
//       />
//     </div>
//   );
// }

export default App;

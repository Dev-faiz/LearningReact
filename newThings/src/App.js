// import axios from 'axios';
// import {  createContext } from 'react';
// import './App.css';
// import './AgePredict.js' ;
// import  {Excuse} from './Excuse.js' ;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Home } from './pages/Home';
// import { Contact } from './pages/Contact';
// import { Menu } from './pages/Menu';
// import { F404 } from './pages/F404';
// import { NavBar } from './NavBar';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Form } from './Form.js';

function App() {
  return <div className='App'>
    <Form />
  </div>
}


// function App() {
//   const client = new QueryClient();
//   // const [userName, setUserName] = useState("Faiz");
//   return <div className='App'>
//     <QueryClientProvider client={client}>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/menu' element={<Menu />} />
//           <Route path='*' element={<F404 />} />
//         </Routes>
//       </Router>
//     </QueryClientProvider>
//   </div>
// }
// import { AgePredict } from './AgePredict.js';


// function App(){
//   const [cat , setName] = useState("");
//   const [excuse , setExcuse] = useState({});


//   return <div className='App'>

//      <select onChange={(e)=>{

//       setName( e.target.value )

//       }}>
//       <option value={"family"}>Family</option>
//       <option value={"office"}>Office</option>
//       <option value={"children"}>Children</option>
//       <option value={"college"}>College</option>
//       <option value={"party"}>Party</option>
//      </select>
//     <button onClick={ (e)=>{ 

//       axios.get(`https://excuser-three.vercel.app/v1/excuse/${cat}`).then((res)=>{setExcuse(res.data)})

//       }}>Family</button>
//     <Excuse excuse={excuse[0]?.category} category={excuse[0]?.excuse}/>
//   </div>

// }


// function App(){

//   const [ ageO , setAgeObject ] = useState({});
//   const [ nameData , setName] = useState("");

//   return <div className='App'>

//     <input placeholder='enter name' onChange={(e)=>{setName(e.target.value)}}></input>
//     <br></br>
//     <button onClick={()=>{


//       axios.get(`https://api.agify.io/?name=${nameData}`).then((res)=>{setAgeObject(res.data)})
//       }}>Predict Age</button>


//     <AgePredict age={ageO.age} count={ageO.count} name={ageO.name}/> 
//   </div>
// }

// function App() {
//   const [text , setText] = useState("");

//   useEffect(()=>{
//     axios.get("https://catfact.ninja/fact").then((res)=> setText(res.data.fact));
//   },[])

//   return (
//     <div className="App">
//       <button onClick={()=>{axios.get("https://catfact.ninja/fact").then((res)=> setText(res.data.fact))}}>Show data </button>
//       <p>{text}</p>
//     </div>
//   );
// }

export default App;

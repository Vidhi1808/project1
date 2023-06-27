// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Code Sandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

// export default App;
import  React, { Component } from 'react';
import Home from './Jsfiles/Home';
import About from './Jsfiles/About';

import Contact from './Jsfiles/Contact';
import Service from './Jsfiles/Service';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Jsfiles/Navbar';
import SignUp from './Jsfiles/SignUp';
class App extends Component{
  render(){
return (
  <div className="App">

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    
  </div>
);
  }
}
export default App;

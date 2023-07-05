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
import Welcome from './Jsfiles/Welcome';
import Contact from './Jsfiles/Contact';
import Login from './Jsfiles/Login';
import Awards from './Jsfiles/Awards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Jsfiles/Navbar';
import Signup1 from './Jsfiles/SignUp1';
import Footer from './Jsfiles/Footer';
import Login1 from './Jsfiles/Login1';
class App extends Component{
  render(){
return (
  <div className="App">
    <Router>
    <Routes>

      <Route path="/project1" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login1/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<Signup1/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/awards" element={<Awards/>}/>
    </Routes>
    </Router>
  </div>
);
  }
}
export default App;

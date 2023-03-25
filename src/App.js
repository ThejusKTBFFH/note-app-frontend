import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Createnote from "./pages/Createnote";
import Auth from "./pages/Auth.js"
import Navbar from "./pages/Navbar";
import './App.css';

function App() {
  return (
    <div className="App">


      

      <Router>

        <Navbar/>
        <Routes>

         

          <Route path="/home" element={<Home/>}/>
          <Route path="/create-note" element={<Createnote/>}/>
          <Route path="/auth" element={<Auth/>}/>

        </Routes>
        
      </Router>
      
     
    </div>
  );
}

export default App;

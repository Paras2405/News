import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sports from "./Pages/Sports";
import Finance from "./Pages/Finance";
import Entertainment from "./Pages/Entertainment";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import Health from "./Pages/Health";

function App() {
  //const location = useLocation()

  return (
    <div className="App">
      <>
      <Router>
        <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Sports' element={<Sports />}/>
      <Route path='/Education' element={<Education />}/>
      <Route path='/Entertainment' element={<Entertainment />}/>
      <Route path='/Finance' element={<Finance />}/>
      <Route path='/Technology' element={<Technology />}/>
      <Route path='/Health' element={<Health />}/>
    

      </Routes>
     
 


      </Router>
  
      </>
    </div>
  );
}

export default App;

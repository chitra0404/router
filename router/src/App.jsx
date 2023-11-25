import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import All from './all';
import Fullstack from './fullstack'
import Datascs from './Datascs'
import Cybersec from './cybersec'
import Career from './career'


function App() {
 

  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<All/>}> </Route>
          <Route exact path="/fullstack" element={<Fullstack/>}> </Route>
          <Route exact path="/datascience" element={<Datascs/>}> </Route>
          <Route exact path="/cyberscience" element={<Cybersec/>}> </Route>
          <Route exact path="/career" element={<Career/>}> </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

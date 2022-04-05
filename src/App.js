import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Next from './components/nextpage'
import StudentMainpage from './components/StudentMainpage'
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/Next' element={<Next></Next>}></Route>
        <Route path='/StudentMainpage' element={<StudentMainpage></StudentMainpage>}></Route>
      </Routes> 
    </Router>
    
    
    // <div className="App">
    //   <Homepage></Homepage>  {/* 첫 메인페이지 */}  
    // </div>
  );
}

export default App;

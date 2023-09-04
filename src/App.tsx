import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.module.css'
import TaskList from './components/TaskList';
import HomePage from './components/HomePage';
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
          </Route>
          <Route path='/tasks'>
          <Route index element={<TaskList/>}/>
          </Route>
          <Route path='/about'>
          <Route index element={<About/>}/>
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
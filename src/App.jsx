import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';
import WordWithColor from './components/WordWithColor';

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={ <Home /> } />
      <Route path="/:input" element={ <Input /> } />
      <Route path="/:input/:textColor/:backgroundColor" element={ <WordWithColor /> } />
    </Routes>
  )
}

export default App
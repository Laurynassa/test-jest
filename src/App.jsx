import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LikeButton from './Components/like/LikeButton';
import StudentForm from './Components/StudentForm/StudentForm';


function App() {
  

  return (
    <div className="App">
      <LikeButton/>
      <StudentForm/>
    </div>
  );
}

export default App;

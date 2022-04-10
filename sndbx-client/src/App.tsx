import React from 'react';
import './App.css';
import { TextField } from './components/TextField';
import FartScroll from 'react-fartscroll'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='box'>
        <FartScroll/>
        <TextField text='yoo' ok={true}/>
      </div>
      
    </div>
  );
}

export default App;

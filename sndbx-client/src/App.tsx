import React from 'react';
import './App.css';
import { TextField } from './components/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='box'>
      <TextField text='yoo' ok={true}/>
      </div>
      
    </div>
  );
}

export default App;

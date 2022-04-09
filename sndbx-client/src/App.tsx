import React from 'react';
import './App.css';
import { TextField } from './components/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text='yo' ok={true}/>
    </div>
  );
}

export default App;

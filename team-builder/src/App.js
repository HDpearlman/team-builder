import React from 'react';
import Members from './Members'
import './App.css';
import { useState } from 'react';

function App() {
  const [members, setMembers] = useState([{name:'Heung-Soo'}]);

  const [name, setName] = useState("");

  const changeHandler = event => {
    setName(event.target.value);
    console.log(name)
  };

  const handleSubmit = event => {
    event.preventDefault();
    setMembers([...members, {name}])
    console.log(name);
    setName('')
  
    
  }
  
  return (
    <div className="App">
      <div>
        <form onSubmit={event => handleSubmit(event)}>
          <label>New Member:
        <input 
          type='text' 
          name='member' 
          value={name}
          onChange={event => changeHandler(event)}></input>
          </label>
        </form>
        <button onClick={handleSubmit}>add member</button></div>
     <div><Members members={members}/></div>
    </div>
  );
}

export default App;

import React from 'react';
import Members from './Members'
import './App.css';
import { useState } from 'react';

function App() {
  const [members, setMembers] = useState([{name:'Heung-Soo',
role:'wizard',
email:'hdpearlman@outlook.com'}]);

  const [teammate, setTeammate] = useState({
    member:"",
    role:"",
    email:""
  });

  const changeHandler = event => {
    setTeammate({...teammate, [event.target.name]: event.target.value});
    console.log(teammate)
  };

  const handleSubmit = event => {
    event.preventDefault();
    setMembers([...members, {teammate}])
    console.log(teammate);
    
  
    
  }
  
  return (
    <div className="App">
      
        <form onSubmit={event => handleSubmit(event)}>
          <label>New Member:
        <input 
          type='text' 
          name='member' 
          value={teammate.name}
          onChange={event => changeHandler(event)}></input>
          </label>
          <div>
            <label>Email:
              <input type='text'
              name='email'
              value={teammate.email}
              onChange={event => changeHandler(event)}></input>
            </label>
            <div>
              <label>Role:
                <select id='role' name='role'
                onChange={event=>changeHandler(event)}>
                  <option>pick one</option>
                  <option value='wizard'>wizard</option>
                  <option value='Pokemaster'>Pokemaster</option>
                  <option value='jedi'>jedi</option>
                </select>
              </label>
            </div>
          </div>
          
          <div>
          <button type='submit'>add member</button></div>
        </form>
        
     <div><Members members={members}/></div>
    </div>
  );
}

export default App;

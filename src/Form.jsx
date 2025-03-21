import React, { useState } from 'react';
import axios from 'axios';


const Form = (props) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.priZapis(resp.data);
    setUserName("");
  }
  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='userName'></label>
    	  <input 
          type="text" 
          value={userName}
          onChange={handleChange}
          placeholder="GitHub username" 
          id='userName'
          required 
        />
        <button>Add card</button>
    	</form>
    </>
  )
};

export default Form;
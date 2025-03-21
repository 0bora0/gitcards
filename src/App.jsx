import React, { useState } from 'react';
import './App.css'

import CardList from './CardList'
import Form from './Form'

export default function App(props) {
  
  const [profiles, setProfiles] = useState([]);
  
  const addNewProfile = (profileData) => {
    setProfiles((profiles) => [profileData, ...profiles])
  };

  	return (
    	<div>
    	  <div className="header">{props.title}</div>
        <Form priZapis={addNewProfile} />
        <CardList profiles={profiles} />
    	</div>
    );
  }	




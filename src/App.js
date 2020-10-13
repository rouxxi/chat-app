import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./compenents/Contact";

function App() {
  return (
    <div className="App">
      <Contact
      name="George"
      online={true}
      avatar="https://randomuser.me/api/portraits/men/71.jpg"
      />
      <Contact
      name="Joannique"
      online={false}
      avatar="https://randomuser.me/api/portraits/men/29.jpg"/>
      <Contact
      name="Gertrude"
      online={true}
      avatar="https://randomuser.me/api/portraits/women/7.jpg"/>

    </div>
  );
}

export default App;

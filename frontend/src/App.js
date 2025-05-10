import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  return (
    <div>
      <p>Name:</p>
      <input type="text"/>
      <p>Phone Number:</p>
      <input type="text"/>
      <p>Email Address:</p>
      <input type="text"/>
      <p>Stringer Name:</p>
      <select>
        <option>Bob</option>
        <option>Jeff</option>
      </select>
      <p>Racket Model:</p>
      <input type="text"/>
      <p>Select String Type:</p>
      <select>
        <option>Aerobyte</option>
        <option>BG 80</option>
      </select>
      <p>Select String Tension Horizontal:</p>
      <input type="text"/>
      <p>Select String Tension Horizontal:</p>
      <input type="text"/>
      <p>Select Racket Drop-off Date and Time:</p>
      <p>Select Racket Drop-off Location:</p>
      <p>Additional Notes:</p>
      <input type="text"/>
    </div>
  );
}

export default App;

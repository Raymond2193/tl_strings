import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5500/api/backend')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error feteching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Message from backend:
        <p>{message}</p>
      </h1>
    </div>
  );
}

export default App;

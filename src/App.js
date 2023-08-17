import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_BASE_URL_NO_API } from './config'; // Importa l'URL di base

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  

  useEffect(() => {
    axios.get(`${API_BASE_URL}/items`) // Utilizza l'URL di base nell'API URL
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddItem = () => {
    axios.post(`${API_BASE_URL}/items`, { name: itemName }) // Utilizza l'URL di base nell'API URL
      .then(response => {
        setItems([...items, response.data]);
        setItemName('');
      })
      .catch(error => console.error(error));
  };

  axios.get(`${API_BASE_URL_NO_API}/sanctum/csrf-cookie`).then(response => {
    console.log('butta bene');
});
  return (
    <div>
    <h1>Lista degli elementi</h1>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
    <div>
      <input
        type="text"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Aggiungi elemento</button>
    </div>
  </div>
  );
}

export default App;

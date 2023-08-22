import React, { useState, 
  useEffect 
} 
  from 'react';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';

function App() {

  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(() => {
        fetchData();
      }, [users]);

  async function fetchData() {
    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials : true
      });
      const response = await axios.get('http://localhost:8000/api/items', {
        withCredentials : true
      });
      if (response.status === 200) {
        setUsers(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

      try {
        await axios.get('http://localhost:8000/sanctum/csrf-cookie',{
          withCredentials : true
        });
        const response = await axios.post('http://localhost:8000/api/items', { name }, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true 
      });
      
      if (response.status === 201) {
        const newItem = response.data;
        // Logic to update your UI or state with the new item
        console.log('New Collaborator added:', newItem);
        // fetchData();
        setName(''); // Clear the input field
      } else {
        console.error('Failed to add Collaborator');
      }
    } catch (error) {
      console.error('Error adding Collaborator:', error);
    }
  };
  
  
  return (
    <div className="App">
      <h1>All Collaborator</h1>
      {isLoading ? ( <LoadingSpinner/> ) :(
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>)}
      <h2>Add a New Collaborator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Add Collaborator</button>
      </form>
    </div>
  );
}


export default App;

// const [csrfToken, setCsrfToken] = useState('');

// useEffect(() => {
//   // Ottieni il token CSRF dall'endpoint apposito di Laravel
//   async function fetchCsrfToken() {
//     const response = await axios.get('http://localhost:8000/sanctum/csrf-cookie');
//     if (response.status === 204) {
  //       setCsrfToken(getCsrfTokenFromCookies());
  //       console.log(getCsrfTokenFromCookies());
  //     }
  //   }
  //   fetchCsrfToken();
  // }, []);
  
  // setUsers(
    //   axios.get('http://localhost:8000/sanctum/csrf-cookie')
    //   .then(response => {if(response.status === 201 ) 
    //     axios.get('http://localhost:8000/api/items')
    //     .then(response => {return response.data})})



    // useEffect(() => {
      //   setTimeout(() => {
        //   fetchCollaborators();
        //   setIsLoading(false);},1000)
        // }, []);
        
        // const getCsrfTokenFromCookies = () => {
          //   const cookies = document.cookie.split('; ');
          //   const csrfCookie = cookies.find(cookie => cookie.startsWith('XSRF-TOKEN='));
          //   if (csrfCookie) {
            //     return csrfCookie.split('=')[1];
    //   }
    //   return null;
    // };
//     );
import { useState, useEffect } from 'react'
import './App.css'
const APIURL = `https://jsonplaceholder.typicode.com/`


function App() {
  const [userData, setUserData] = useState([]);

  useEffect (() => {
  const getUsers = async () => {
    const response = await fetch(`${APIURL}users`);
    const json = await response.json();
    const users = json;
    setUserData(users);
  }
  getUsers();
}, []);

  return (
    <>
    <h1>Users</h1>
    <section id='containerForCategories'>
    <ul>
      <h2>name</h2>
      {userData.map((user, i) => (
        <li key={i}>{user.name}</li>))}
    </ul>
    <ul>
      <h2>username</h2>
      {userData.map((user, i) => (
        <li key={i}>{user.username}</li>))}
    </ul>
    <ul>
      <h2>email</h2>
      {userData.map((user, i) => (
        <li key={i}>{user.email}</li>))}
    </ul>
    </section>
    </>
  )
}

export default App



import './App.css';
import { BrowserRouter as Router,
Routes, 
Route,
Link } from 'react-router-dom';
import Header from './component/Header';
import AddItem from './additem.js';
import Home from './home';
import './style/header.css';
import './style/home.css';
import { useEffect, useState } from 'react';
import LoginForm from './component/LoginForm';

function App() {

  const [testData, setTestData] = useState([]);
  const request = [];
  const users = [];

  const adminUser = {
    id: '',
    password: '123',
  }

  const [user, setUser] = useState({id: '', password: ''});
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://media-content.ccbp.in/website/react-assignment/resources.json')
      const jsonResult = await result.json()

      setTestData(jsonResult);

    }

    fetchData();
    
  }, [])

  const Login = details => {
    // console.log(details);

    if(details.password === adminUser.password) {
      
      setUser({
        id: details.id,
        password: details.password
      })
    } else {
      setError('Details do not match');
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({
      id: '',
      password: '',
    })
  }

  function displayRequest() {
    for(let i = 0; i<testData.length; i++) {
      if(testData[i].tag === 'request') {
        request.push(testData[i]);
      }
    }
  }

  displayRequest();

  // console.log("requests in useEffect", request);

  function displayUsers() {
    for(let i = 0; i<testData.length; i++) {
      if(testData[i].tag === 'user') {
        users.push(testData[i]);
      }
    }
  }

  displayUsers();
  // console.log("users in useEffect", users);


  return (
    <div className="App">
      {(user.id !== '') ? (
        <Router>
          <Header/>

            <Routes>
            <Route path = '/' exact element = {(
                  <Home testData={testData} requestTag = {request} userTag = {users} />
                )}/>
              <Route path = '/additem' exact element = {(
                  <AddItem/>
                )}/>
            </Routes>
      </Router>
      ) :
       <Router>

        <Routes>
          <Route path = '/' exact element = {(
            <LoginForm Login = {Login} error = {error} />
          )} />
            
        </Routes>
       </Router>
       }

        
   
    </div>
  );
}

export default App;

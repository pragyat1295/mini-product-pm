

import './App.css';
import { BrowserRouter as Router,
Routes, 
Route,
// redirect,
// useNavigate ,
Link } from 'react-router-dom';

import Header from './component/Header';
import AddItem from './additem.js';
import Home from './home';
import './style/header.css';
import './style/home.css';
import { useEffect, useState, useLayoutEffect } from 'react';
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
  // const navigate = useNavigate();



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
    });
    // navigate('/mini-product-pm')
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

  (function () {
    for(let i = 0; i<testData.length; i++) {
      if(testData[i].tag === 'user') {
        users.push(testData[i]);
      }
    }
  })()

  // displayUsers();
  // console.log("users in useEffect", users);

  // ===========================================================================================
  // ===========================================================================================

  // const Child = () => {
  //   useEffect(() => {
  //       console.log('useEffect child');
  //       setTimeout(function() {
  //         console.log('timegap from child');
  //       }, 1000);

  //     });
  //     // useLayoutEffect(() => {
  //     //   console.log('use layout effect child');
  //     // });
  //   // console.log('child is called');
  
  //     return null;
  // }
  
  // const Parent = () => {
  //   useEffect(() => {
  //       console.log('useEffect parent');
  //     });
  //     useLayoutEffect(() => {
  //       // console.log('use layout effect parent');
  //       setTimeout(function() {
  //         console.log('use layout effect parent');
  //       },1000 )
  //     });
  
  //     return Child();
  // }

  // Parent();

  // ==================================================================================================
  // ==================================================================================================

  return (
    <div className="App">
      {(user.id !== '') ? (
        <Router>
          <Header logOut={Logout} />

            <Routes>
           
            <Route path = '/mini-product-pm'  element = {(
                  <Home testData={testData} requestTag = {request} userTag = {users} />
                )}/>
              <Route path = '/additem'  element = {(
                  <AddItem/>
                )}/>
            </Routes>
      </Router>
       ) : 
        <Router>

        <Routes>
          <Route path = '/mini-product-pm' exact element = {(
            <LoginForm Login = {Login} error = {error} />
          )} />
            
        </Routes>
       </Router>
       } 

        
   
    </div>
  );
}

export default App;

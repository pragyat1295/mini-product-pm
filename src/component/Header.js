import React, { useState } from 'react';
import logo from '../image/header/pm_logo.webp';
import user from '../image/header/user.png';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header({logOut}) {

  const location = useLocation();

  // const [displayClass, setdisplayClass] = useState(false);

  // function displayLocation() {
  //   console.log("location is", location.pathname);
  //   if(location.pathname === '/additem') {
  //     setdisplayClass(true);
  //   }
  // }

  return (
    <div className = 'header'>
        <div className = 'row'>
          <div className = 'col-8 col-lg-7 col-xl-9' >
            <div className = 'logo'>
              <img src = {logo} width = {75} height = {75} alt = '../'/>
            </div>
            
          </div>

          <div className='col-2 col-lg-3 col-xl-2 d-none d-lg-block' >
            <NavLink to= '/additem' style={{textDecoration: 'none'}}>
                <button className = 'add_item' 
                // onClick={displayLocation}
                // style = {{display: displayClass ? 'none' : 'block'}}
                >
                  ADD ITEM
                </button>
              </NavLink>
          </div>

          <div className = 'col-4 col-lg-2 col-xl-1'>
            <div className="dropdown circleDP center">
              
                <div>
                  <img src = {user} alt = '../user' height = {50} width = {50} />
                </div>
                <div 
                // className = 'd-block d-lg-none'
                >
                  <a className="btn btn-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"/>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {/* <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    <div className = 'dropdown-item d-block d-lg-none add_item'>
                    
                      <NavLink to= '/additem'>
                          <button >
                            ADD ITEM
                          </button>
                        </NavLink>
                   
                    </div>

                    <div className = 'dropdown-item'>
                      <button onClick={logOut}>
                        Logout
                      </button>
                    </div>
                  </ul>
                </div>

            </div>
          </div>
        </div>
        </div>
  )
}

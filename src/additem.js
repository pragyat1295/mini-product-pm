import React from 'react';
// import { useEffect, useState } from 'react';
import frontImage from './image/add item/image_9.svg';
import './style/addItem.css';
import { NavLink } from 'react-router-dom';
import ItemForm from './component/ItemForm';

export default function AddItem() {

    
  return (
    <div style = {{background: '#F5F5F5'}}>

        {/* ---------------- Send data --------------- */}

        <div className = 'row'>

          <div className = 'col-12 col-lg-6  '>

          <div className = "back-to-home">
            <NavLink to= '/'>
              <button style={{marginLeft: '5%', marginTop: '5%'}}>
                {'<  Users'} 
              </button>
            </NavLink>
          </div>
           
            <ItemForm/>
            

            {/* <input type = 'text' name = 'icon_url' value = {sendData.icon_url} 
            onChange= {e => setSendData({...sendData, icon_url: e.target.value})} placeholder= 'icon_url'/><br/>
            <input type = 'text' name = 'link' value = {sendData.link} 
            onChange= {e => setSendData({...sendData, link: e.target.value})} placeholder= 'link'/><br/>
            <input type = 'text' name = 'description' value = {sendData.description} 
            onChange= {e => setSendData({...sendData, description: e.target.value})} placeholder= 'description'/><br/>
            <input type = 'text' name = 'category' value = {sendData.category} 
            onChange= {e => setSendData({...sendData, category: e.target.value})} placeholder= 'category'/><br/>
            <input type = 'text' name = 'tag' value = {sendData.tag} 
            onChange= {e => setSendData({...sendData, tag: e.target.value})} placeholder= 'tag'/><br/>

            <input type= 'submit' value = 'submit' onClick={submitHandler}/> */}

            
          </div>

          <div className = 'col-12 col-lg-6 '>
            <img src = {frontImage} alt = '../side_img'/>
          </div>
        </div>
        
    </div>
  )
}

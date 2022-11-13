import React from 'react';
import { useEffect, useState } from 'react';

export default function ItemForm() {

    const [sendData, setSendData] = useState({title: '', icon_url: '', 
    link: '', description: '', category: '', tag: '' });

    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log("data is" ,sendData);
    
        const myData = {
          title: sendData.title,
          icon_url: sendData.icon_url,
          link: sendData.link,
          description: sendData.description,
          category: sendData.category,
          tag: sendData.tag
        }
        console.log("data send is", myData);
    
        const result = await fetch('https://media-content.ccbp.in/website/react-assignment/add_resource.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(myData)
        })
    
        const resultInJson = await result.json();
        console.log("Push result" ,resultInJson)
      }
  return (
    <div className = 'itemForm'>

    <h2 className = 'center'>Item Details</h2>
    <div className = 'mb-3'>
      <label htmlFor="exampleFormControlInput1" className="form-label label_name">ITEM NAME</label>
      <input className="form-control" type = 'text' name = 'title' value = {sendData.title} 
      placeholder= 'please enter this field'
      onChange= {e => setSendData({...sendData, title: e.target.value})} />
    </div>
    {/* <br/> */}

    <div className = 'mb-3'>
      <label htmlFor="exampleFormControlInput1" className="form-label label_name">LINK</label>
      <input className="form-control" type = 'text' name = 'url' value = {sendData.link} 
      placeholder= 'please enter this field'
      onChange= {e => setSendData({...sendData, link: e.target.value})}/>
    </div>


    <div className = 'mb-3'>
      <label htmlFor="exampleFormControlInput1" className="form-label label_name">RESOURCE NAME</label>
      <input className="form-control" type = 'text' name = 'tag' value = {sendData.tag} 
      placeholder= 'please enter this field'
      onChange= {e => setSendData({...sendData, tag: e.target.value})} />
    </div>


    <div className = 'mb-3'>
      <label htmlFor="exampleFormControlInput1" className="form-label label_name">DESCRIPTION</label>
      <textarea className="form-control"  name = 'description' 
      value = {sendData.description} placeholder= 'please enter this field' id="exampleFormControlTextarea1" rows="3"
      onChange= {e => setSendData({...sendData, description: e.target.value})} />
    </div>
    <div className = 'center'>
      <button type="button" className="btn btn-primary" onClick={submitHandler}>Create</button>
    </div>
    

    </div>
  )
}

import React from 'react';
import ResourcePreview from './component/ResourcePreview';
import {  useState } from 'react';
import Pagination from './component/Pagination';
import { BsSearch } from "react-icons/bs";

export default function Home( {testData, requestTag, userTag} ) {

 const [currentPage, setCurrentPage] = useState(1);
 const [postPerPage, setpostPerPage] = useState(6);
 const [searchTerm, setSearchTerm] = useState('');

 const [allTag, setallTag] = useState(true);
 const [requestsTag, setrequestsTag] = useState(false);
 const [usersTag, setusersTag] = useState(false);


 const lastPostIndex = currentPage * postPerPage;
//  console.log("last post index", lastPostIndex);
 const firstPostIndex = lastPostIndex - postPerPage;
 const currentPosts =  testData.slice(firstPostIndex, lastPostIndex);

 const currentRequestTag = requestTag.slice(firstPostIndex, lastPostIndex);

 const currentUserTag = userTag.slice(firstPostIndex, lastPostIndex);
//  console.log(testData.length);


function renderAllTag() {
  return(
    <div>
      <ResourcePreview resourceData={currentPosts} searchTerm = {searchTerm} />

      <div style = {{marginTop: '5%'}}>
        <Pagination totalPosts = {testData.length} postsPerPage = {postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    </div>
  )
}


function renderRequestTag() {
  return(
    <div>
      <div>
        <ResourcePreview resourceData={currentRequestTag} searchTerm = {searchTerm}/>
      </div>

      <div style = {{marginTop: '5%'}}>
        <Pagination totalPosts = {requestTag.length} postsPerPage = {postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    </div>
  )
}

function renderUserTag() {
  return(
    <div>
      <div>
        <ResourcePreview resourceData={currentUserTag} searchTerm = {searchTerm}/>
      </div>

      <div style = {{marginTop: '5%'}}>
          <Pagination totalPosts = {userTag.length} postsPerPage = {postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    </div>
  )
}

function setEvent(id) {
  setallTag(id === 1);
  setrequestsTag(id === 2);
  setusersTag(id === 3);
}


  return (
    
    <div className = 'pageLayout'>
    <div className = 'container '>

          {/* ------------- Filter ------------ */}

          <div className = 'center'>
            <div className = 'row' style = {{width: '80%', background: '#D7DFE9'}}>
                <div className = 'col-4 center' style = {{background: allTag ? '#0B69FF' : '#D7DFE9',
                cursor: 'pointer',
                color: allTag ? ' white' : '#171F46', 
                fontWeight: '600',
                padding: '1%'}}
                  onClick={() => {setEvent(1)}} > 
                    Resources
                </div>

                <div className = 'col-4 center' style = {{background: requestsTag ? '#0B69FF' : '#D7DFE9' ,
                 cursor: 'pointer',
                 color: requestsTag ? ' white' : '#171F46',
                 fontWeight: '600',
                }}
                  onClick={() => {setEvent(2)}}>
                    Requests
                </div>

                <div className = 'col-4 center' style = {{background: usersTag ? '#0B69FF' : '#D7DFE9' ,
                 cursor: 'pointer',
                 color: usersTag ? ' white' : '#171F46',
                 fontWeight: '600',
                }}
                onClick={() => {setEvent(3)}}>
                    Users
                </div>
            </div>
          </div>
          
           {/* ----------- search ----------------------- */}

           <div className = 'input-group parent' style = {{marginTop: '5%', width: '75%'}}>
                
                <input className = 'form-control input_search' type = 'text' placeholder='search resource name...' onChange = {e => {setSearchTerm(e.target.value)}} />
                
              <div className='child'>
              <BsSearch/>
              </div>
           </div>

            {allTag && renderAllTag()}
            {requestsTag && renderRequestTag()}
            {usersTag && renderUserTag()}


    </div>
  </div>
  

  
  )
}

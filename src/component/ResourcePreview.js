import React from 'react';
import ResourceCard from './ResourceCard';

export default function ResourcePreview( {resourceData, searchTerm} ) {
  return (
    <div className = "row">
    {
      resourceData.filter((data) => {
        if(searchTerm === '') {
            return data;
        } else if(data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return data;
        }
      }).map(data => 

        <ResourceCard key = {data.id} id={data.id} link = {data.link}  
        title = {data.title} category = {data.category}  icon = {data.icon_url}  
        description = {data.description}/>
        )
    }

    {/* <div >
    {
      resourceData.filter(data => {
        if(data.tag === 'request') {
            return data;
        }
      }).map(data => 

        <ResourceCard key = {data.id} id={data.id} link = {data.link}  title = {data.title} category = {data.category}  icon = {data.icon_url}  description = {data.description}/>
        )
    }
    </div> */}
  </div>
  )
}

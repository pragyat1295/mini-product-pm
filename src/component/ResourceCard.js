import React from 'react'

export default function ResourceCard({id, icon, title, category, link, description} ) {
  return (
    <div className = 'col-12 col-lg-6 col-xl-4 displayLayout' key={id} > 
          <div className = 'displayCard' >
            <div className = 'row'>
              <div className = 'col-2 data_image'>
                <img src = {icon} alt = '...' height={40} width = {40}/>
              </div>
              <div className = 'col-10 ' >
                <div className = 'data_title'>
                    {title}
                </div>
                <div className = 'data_category'>
                    {category}
                </div>

              </div>
            </div>

            <div className = "data_link" > 
              <a href = {link}>
              {link}
              </a>
            </div>

            <div className = "data_description" >
              {description}
            </div>
            
          </div>
          
        </div>
  )
}



import React from 'react';
import '../style/pagination.css';

export default function Pagination({ totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage, }) {
    let pages = [];
    // console.log("total psosts and posts perpage" , postsPerPage);

    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++ ) {
        pages.push(i);
    }
    // console.log("pages is", pages)
  return (
    <div className='pagination'>
    {
        pages.map((page,index) => {
            return <button key = {index} onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}>
                 {page} </button>
        })
    }
</div>
  )
}

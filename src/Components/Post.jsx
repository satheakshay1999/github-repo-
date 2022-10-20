import React from 'react';
import Commits from './Commits';


const Post = ({loading , posts}) => {
    //  console.log(posts.items)
     if(loading===true){
        return <h1>Loading....</h1>
     }
 
  return (
    <div>
      {posts.items.map((ele)=>{
            return (
               
        <div className="px-1 my-5 bg-light rounded-3 container width" key={ele.id}>
          <div className="container py-4">
          <h5 className="card-title text-center ">{ele.name}</h5>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={ele.owner.avatar_url}
                  alt={ele.full_name}
                  width="180px"
                ></img>
              </div>
              <div className="col-md-8">
              <p className="card-text text-right my-4">{ele.description}</p>
              </div>
              <div className="row col-md-8">
                <span className='w-25'><p className="m-2  text-center border rounded p-1">Stars : {ele.stargazers_count}</p></span>
                <span className='w-25'><p className="m-2  text-center border rounded p-1">Stars : {ele.stargazers_count}</p></span>
                <small className='w-50' >last pushed at : {ele.updated_at} by {ele.name}</small>
                <Commits className='w-50' />
              </div>

            </div>
          </div>
        </div>
   
        )
      })}
      
    </div>
  )
}

export default Post

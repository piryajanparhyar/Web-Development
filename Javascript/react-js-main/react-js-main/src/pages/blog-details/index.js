import React from "react";
import {useLocation} from 'react-router-dom'
const BlogDetails = () => {
    const routerLocation  = useLocation();
 const stateData =  routerLocation.state.data
  return (
    <div>
      <h1>Blog Details</h1>
      <img src={stateData.imgURL} style={{width:"100%"}}/>
      <h4>{stateData.title}</h4>
      <p>{stateData.text}</p>
    </div>
  );
};
export default BlogDetails;

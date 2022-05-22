

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blog = () => {
    const[data ,SetData] = useState([]);
    useEffect(()=>{
        axios.get('https://b2bnetworkservices.online/blogs/public').then(respons=>{
            console.log(respons.data.blogs);
            SetData(respons.data.blogs)
        })
    },[]);
  return (
    <div>{

        data?.map((v)=>{
            return(
                <p>{v.title}</p>
            )
        })
        }</div>
  )
}


 export default Blog


import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blog = () => {
    const[data ,SetData] = useState([]);
    useEffect(()=>{
        axios.get('https://b2bnetworkservices.online/blogs/public').then(respons=>{
            console.log(respons.data.blogs);
            SetData(respons.data.blogs)
        })
    },[]);
  return (
    <div>{

        data?.map((v)=>{
            return(
                <p>{v.title}</p>
            )
        })
        }</div>
  )
}
 export default Blog
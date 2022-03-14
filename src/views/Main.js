import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard/BlogCard.js';


import getBlog from '../services/blogs';

export default function Main() {
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const response = await getBlog();
      setBlogs(response);


    };


    fetchData();
  }, []); 
  return (
    <div className='main'>main
      {blogs.map((data) => (
      
        <BlogCard key={data.id} 
          title={data.title}
          subtitle={data.subtitle}
          text={data.text} 
          image={data.image} />
      ))}
    
    </div>

  );
}

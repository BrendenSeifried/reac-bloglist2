import React, { useState, useEffect } from 'react';

// import BlogCard from '../BlogCard/BlogCard.js';

// import { useState, useEffect } from 'react/cjs/react.production.min';

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
    
    <div>main</div>
  );
}

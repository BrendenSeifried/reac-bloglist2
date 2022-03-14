import React from 'react';

import BlogCard from '../BlogCard/BlogCard.js';

import { useState, useEffect } from 'react/cjs/react.production.min';

import { getBlog } from '../services/blogs.js';

export default function main() {
  const [title, subtitle, text, image] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const resp = await fetchBlog;
    };
  }); 
  return (
    
    <div>main</div>
  );
}

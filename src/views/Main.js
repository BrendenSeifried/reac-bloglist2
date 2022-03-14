import React from 'react';

import BlogCard from '../BlogCard/BlogCard.js';

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

import React from 'react'

import Blog from "./Blog/Blog";

function HomeFinal({data}) {
  
  return (
    <div>
      <Blog data={data} />
    </div>
  );
}

export default HomeFinal
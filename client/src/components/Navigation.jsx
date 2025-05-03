import React from 'react';

const Navigation = React.memo(() => {
  return ( 
    <nav>
      <a href="/">Home</a> | 
      <a href="/about">about</a>
    </nav>
   );
})

 
export default Navigation;
import React from 'react';

const About = React.memo(() => {
  return <h1>About Page</h1>
})

const AboutRoutes = {
  path: '/about',
  element: <About /> 
}

export  {About, AboutRoutes}
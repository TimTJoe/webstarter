import React from 'react';

import Root from "@components/Layout";
import Home from "@components/Home"
import {AboutRoutes} from '@components/About';

const AppRoutes = [
  {
    path: '/',
    element: <Root />,
    children: [
     { index: true, element: <Home />},
      AboutRoutes,
    ]
  }
]

export default AppRoutes
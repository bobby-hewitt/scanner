import React from 'react'
import {useRoutes} from 'hookrouter';
import { Home, NotFound } from 'Containers'
const routes = {
    '/': () => <Home />
};
  
const MyApp = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <NotFound />;
}

export default MyApp
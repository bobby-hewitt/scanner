import React, { useState } from "react";
import { Provider } from "./Contexts/global";
import initialState from './initialState'
import Routes from './routes'
const ProviderComponent = props => {  
  const [egState, setEgState] = useState();
  return (
     <Provider
        value={{
          egState,
          setEgState
        }}
      >
       <Routes />
    </Provider>
  );
};

export default ProviderComponent;
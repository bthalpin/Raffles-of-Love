import React, { createContext, useContext } from "react";
import { useCharityReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useCharityReducer({
    user:{
        name:'',
        email:'',
        location:'',
        charityId:''
    },
    charities: [],
    products: [],
    cart: [],
    cartOpen: false,
    total:0,
    currentCharity:{},
    charityProducts:[],
    orderSummary:[],
  });
  
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CHARITY,
  CLEAR_CART,
  TOGGLE_CART,
  TOTAL,
  UPDATE_CHARITIES,
  UPDATE_CHARITY_PRODUCTS,
  UPDATE_USER_INFO,
  ORDER_SUMMARY
} from './actions';


export const reducer = (state, action) => {
  switch (action.type) {
   
    case ORDER_SUMMARY:
      return {
        ...state,
        orderSummary: [...action.orderSummary],
      };
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };
    
    case UPDATE_CHARITIES:
        return {
            ...state,
            charities: [...action.charities]
        };
    
    case UPDATE_CHARITY_PRODUCTS:
        return {
            ...state,
            charityProducts:[...action.charityProducts]
        }

    case UPDATE_USER_INFO:
      return {
        ...state,
        user:{...action.user}
      }
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.quantity = action.quantity;
          }
          return product;
        }),
      };
    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };
   
    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CHARITY:
      return {
        ...state,
        currentCharity: action.currentCharity,
      };
    case TOTAL:
      return {
        ...state,
        currentTotal: action.currentTotal,
      };

   
    default:
      return state;
  }
};

export function useCharityReducer(initialState) {
  return useReducer(reducer, initialState);
}

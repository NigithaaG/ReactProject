import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const FETCH_DRESSES_SUCCESS = 'FETCH_DRESSES_SUCCESS';

export const addToCart = (dress) => ({
  type: ADD_TO_CART,
  payload: dress,
});

export const removeFromCart = (dressId) => ({
  type: REMOVE_FROM_CART,
  payload: dressId,
});

export const fetchDressesSuccess = (dresses) => ({
  type: FETCH_DRESSES_SUCCESS,
  payload: dresses,
});

export const fetchDresses = () => {
  return async (dispatch) => {
    try {
      const dresses = [
        { id: 1, name: 'Blue Regular Maxi dress', description: 'Rs.699', image: '/images/n2.avif' },
        { id: 2, name: 'Blue Floral print dress', description: 'Rs.549', image: '/images/n4.webp' },
        { id: 3, name: 'Green Embroidered dress', description: 'Rs.650', image: '/images/n4.avif' },
        { id: 4, name: 'Pink Floral Churidhar', description: 'Rs.750', image: '/images/n3.jpg' },
      ];
      dispatch(fetchDressesSuccess(dresses));
    } catch (error) {
      console.error('Error fetching dresses:', error);
    }
  };
};

const initialCartState = {
  items: [],
};

const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialDressesState = {
  list: [],
};

const dressesReducer = (state = initialDressesState, action) => {
  switch (action.type) {
    case FETCH_DRESSES_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  dresses: dressesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
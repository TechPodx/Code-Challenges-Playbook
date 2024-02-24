// Import createStore and combineReducers here.
import { createStore, combineReducers } from "redux";
// Import the slice reducers here.
import { inventoryReducer } from "../features/inventory/inventorySlice";
import { cartReducer } from "../features/cart/cartSlice";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice";

// Create and export the store here.
const reducers = {
  inventory: inventoryReducer,
  currencyFilter: currencyFilterReducer,
  cart: cartReducer,
};

const rootReducer = combineReducers(reducers);
export const store = createStore(rootReducer);

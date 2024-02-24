import React from "react";

import { Inventory } from "../features/inventory/inventory.js";
import { CurrencyFilter } from "../features/currencyFilter/currencyFilter.js";
// Import the Cart component.
import { Cart } from "../features/cart/Cart.js";

// Render the Cart component below <Inventory />
export const App = (props) => {
  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
    </div>
  );
};

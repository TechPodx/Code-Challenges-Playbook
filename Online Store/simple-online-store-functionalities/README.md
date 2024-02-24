# Simple Online Store Sample

The application displays products from the online store and allow the user to add them to their cart. In the cart, the user can adjust the quantity of each item and the running total will be displayed at the bottom. Lastly, the user can choose the currency for the entire application.

### This application has three slices of state

- inventory: An array of objects representing the items that are available to purchase.

- cart: An object that maps the name of each item added to the cart to an object with the price and desired quantity for that item.

- currencyFilter: A string that represents the currency used to calculate the prices displayed to the user: 'USD', 'CAD' or 'EUR'.

### This application mainly covers

- Action creators
- Use state slices
- Create reducers
- Use and update state
- React 18 and Redux

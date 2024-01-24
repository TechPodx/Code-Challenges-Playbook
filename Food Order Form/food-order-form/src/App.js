import React from 'react';
import FoodOrderForm from './FoodOrderForm';
import FoodItem from "./FoodItem";
import styles from "./Styles/App.module.css";
import Header from './Header.js';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <FoodItem
        name="01. Hawaiian Chicken Pizza" 
        price={5.99} 
        imgSrc="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        details= "🍕 A tasty twist on pizza with grilled chicken, pineapple, ham, and melted cheese for a sweet and savory flavor explosion."
      />
      <FoodItem
        name="02. Spaghetti Carbonara" 
        price={6.99} 
        imgSrc="https://images.unsplash.com/photo-1608756687911-aa1599ab3bd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
        details= "🍝 An iconic Italian pasta dish known for its simplicity and rich flavor. It consists of spaghetti noodles tossed with other ingredient."
      />
      <FoodItem
        name="03. Margherita Pizza" 
        price={2.99} 
        imgSrc="https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        details= "🍕 A classic Italian favorite, featuring a simple yet flavorful combination of tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil on a thin crust."
      />
      <FoodOrderForm />
    </div>
  )
}

export default App
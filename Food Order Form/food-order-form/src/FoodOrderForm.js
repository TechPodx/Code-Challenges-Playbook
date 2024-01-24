import React, { useState } from "react";
import styles from './Styles/FoodOrderForm.module.css'

function FoodOrderForm() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');
  // To manage submitted form data
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order Successful!

      Your order was ${order}.
      
      Please show your confirmation number for pickup.`
    );
  };

  return(
    <form onSubmit={handleSubmit} id={styles.form}>
      <label htmlFor="name" className={styles.labels}>Name:</label>
      <input
        type="text" 
        name="name"
        id="name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        placeholder="Your Name"
      />
      <label htmlFor="phone" className={styles.labels}>Phone No:</label>
      <input
        type="tel"
        name="phone" 
        id="phone" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={styles.input}
        placeholder="Mobile Number"
      />
      <label htmlFor="address" className={styles.labels}>Address:</label>
      <input
        type="text"
        name="address" 
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={styles.input}
        placeholder="Address"
      />
      <label htmlFor="order" className={styles.labels}>Order:</label>
      <input
        type="text" 
        name="order"
        id="order" 
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        className={styles.input}
        placeholder="Item No"
      /> 
      <button type="submit" id={styles.button}>Submit Order</button>
    </form>
  );
};

export default FoodOrderForm;
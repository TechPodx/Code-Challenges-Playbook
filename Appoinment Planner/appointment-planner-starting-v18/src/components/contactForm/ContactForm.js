import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Contact Name"
          aria-label="Contact Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Contact Phone"
          aria-label="Contact Phone"
          pattern="^(?:(?:\+44)|(?:0))(?:(?:20[7,8])|(?:2[3,4,8,0])|(?:3[5-9])|(?:1[0-2,4-9])|(?:5[5-9])|(?:6[0-6])|(?:7[1-9])|(?:8[1-9])|(?:9[0-6]))[0-9]{8}$"
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          placeholder="Contact Email"
          aria-label="Contact Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          value={email}
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact" />
    </form>
  );
};

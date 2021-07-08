import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// styled
import styled from 'styled-components';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqplbek");
  if (state.succeeded) {
      return <p>Message Sent!</p>;
  }
  return (
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="name">
        Name:
      <input
        id="name"
        type="name" 
        name="name"
      /></label>
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email:
      <input
        id="email"
        type="email" 
        name="email"
      /></label>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="phone">
        Phone:
      <input
        id="phone"
        type="message" 
        name="phone"
      /></label>
      <ValidationError 
        prefix="phone" 
        field="number"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your Message Here!" />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </StyledForm>
  );
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000c5;
  border-radius: 20px;
  width: 40%;
  height: 70%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  @media (max-width: 1450px){
        width: 90%;
    } 
}
h4 {
  font-size: 1.5em;
  margin-bottom: 12px;
  color: White;
  letter-spacing: 1px;
}
label {
  font-size: 1.5em;
  font-weight: 700;
  color: #84577C;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  margin: 1em 0;
}
input, textarea {
  border-radius: 12px;
  text-align: center;
  margin: 6px;
  background: darkgray;
  border: none;
}

input {
  height: 30px;
  letter-spacing: 1px;
  margin-left: 10px;
}
textarea {
  height: 120px;
  width: 90%;
  margin: 2em 0 ;
  padding: 10px;
  text-align: left;
  ::placeholder {
    text-align: center;
  }
}

button {
  width: 150px;
  margin-top: 5px;
  height: 50px;
  background: #84577C;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 700;
  @media (max-width: 750px){
    font-size: 2em;
    border: 1px black solid;
  }
  &:hover, &:focus {
      color: #84577C;
      background: #000000;
      border: White solid 1px;
  }

`;
export default ContactForm;

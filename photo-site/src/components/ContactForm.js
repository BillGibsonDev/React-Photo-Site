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
      <label htmlFor="email">
        Email </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="textarea">
        Message </label>
      <textarea
        id="message"
        name="message" />
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
}
h4 {
  font-size: 1.5em;
  margin-bottom: 12px;
  color: White;
  letter-spacing: 1px;
}
label {
  font-size: 1.2em;
  font-weight: 700;
  color: #84577C;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
}
input, textarea {
  border-radius: 12px;
  text-align: center;
  margin: 6px;
  background: darkgray;
}
input {
  height: 30px;
  letter-spacing: 1px;
  margin-left: 10px;
}
textarea {
  height: 100px;
  margin-left: 10px;
}
button {
  width: 100px;
  margin-top: 5px;
  height: 30px;
  background: #84577C;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: 700;
  &:hover, &:focus {
      color: black;
      background: white;
  }

`;
export default ContactForm;

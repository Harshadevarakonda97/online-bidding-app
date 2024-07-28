// src/pages/Signup.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background: #f9f9f9;
`;

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

const SocialLoginContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const SocialButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Signup = () => (
  <Container>
    <FormContainer>
      <h2>Sign Up</h2>
      <Form>
        <label>First Name</label>
        <Input type="text" placeholder="First Name" />
        <label>Last Name</label>
        <Input type="text" placeholder="Last Name" />
        <label>Email Address</label>
        <Input type="email" placeholder="hello@example.com" />
        <label>Password</label>
        <Input type="password" placeholder="********" />
        <Button type="submit">Submit</Button>
      </Form>
      <SocialLoginContainer>
        <SocialButton><img src="path_to_google_logo" alt="Google" /></SocialButton>
        <SocialButton><img src="path_to_facebook_logo" alt="Facebook" /></SocialButton>
        <SocialButton><img src="path_to_apple_logo" alt="Apple" /></SocialButton>
      </SocialLoginContainer>
    </FormContainer>
    <div>
      <img src="path_to_side_image" alt="Signup illustration" />
    </div>
  </Container>
);

export default Signup;

import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
import Navbar from '../components/Navbar';

const Container = styled.div`
    width: 100vw  ;
    height: 100vh;
    background-color: green;
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ), url("https://img.freepik.com/premium-photo/beautiful-girl-with-long-brown-hair-purple-dress-field-sunset-eastern-appearance-oriental_102037-605.jpg?w=2000") center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`;

const Tittle = styled.h1`
    font-style: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-style: 14px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
`;


const Register = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Wrapper>
            <Tittle>CREATE AN ACCOUNT</Tittle>
            <Form>
                {/* <Input placeholder="name"/>
                <Input placeholder="Last Name"/> */}
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                {/* <Input placeholder="Confirm Password"/> */}
                <Agreement>
                    By Creating an account , I consent to the processing of my personal data in
                     accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Sign up</Button>
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register
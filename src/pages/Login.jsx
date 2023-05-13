import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { login } from '../redux/apiCalls';
import { mobile } from '../Responsive';
import Navbar from '../components/Navbar';

const Container = styled.div`
    width: 100vw  ;
    height: 100vh;
    background-color: green;
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)
    ), url("https://media.vogue.co.uk/photos/5dc301a1118a790008efe6c0/master/pass/004-Kendall-Jenner-Vogue-Int-6-Nov-2019-Splash-News.jpg") center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: green;
        cursor: not-allowed
`;

const Link =  styled.a`
    margin:5px 0px;
    text-decoration:underline;
    font-size:12px;
    cursor: pointer; 
`;
const Error = styled.span`
    color: red
`

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const {isFetching ,error } = useSelector((state) => state.user)

    const handleClick = (e) =>{
        e.preventDefault()
        login(dispatch,{username,password})
    }

   return (
    <>
    <Navbar />
    <Container>
        <Wrapper>
            <Tittle>SIGN IN</Tittle>
            <Form>
                <Input 
                    placeholder="username"
                    onChange={(e)=> setUsername( e.target.value)}
                />
                <Input 
                    placeholder="password"
                    type="password"
                    onChange= {(e)=> setPassword( e.target.value)}
                />
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>Something went wrong.....</Error>}
                <Link>DON'T YOU REMEMBER PASSOWORD?</Link>
                <Link >CREATE NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    </>
  )
}

export default Login
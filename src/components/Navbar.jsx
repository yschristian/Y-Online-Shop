import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components'
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Responsive"


const Container = styled.div`
    height: 60px;
    z-index:3;
    ${mobile({height: "40px",marginBottom:"10px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding:"10px 0px"})}
`

const  Left  = styled.div`
     flex: 1;
     display: flex;
     align-items: center;
  `
  const Langauge = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display:"none"})}
  `
  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:25px ;
    padding: 5px;
  `
const  Input = styled.input`
border: none;
${mobile({width: "50px"})}
`
const  Center  = styled.div`
     flex: 1;
     text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize:"24px"})}
`
const  Right  = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ${mobile({flex: 2, justifyContent:"center"})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({display:"12px", marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
             <Left>
                 <Langauge > EN</Langauge> 
                 <SearchContainer>
                     <Input placeholder='Search'/>
                     <SearchIcon style={{color:"gray",fontSize:16}}/>
                 </SearchContainer>
              </Left>
             <Center>
                 <Logo>YUBA.</Logo>
             </Center>
             <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                         <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
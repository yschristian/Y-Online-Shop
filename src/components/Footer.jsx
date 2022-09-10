import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { mobile } from '../Responsive';


const Container  = styled.div`
display: flex;
${mobile({flexDirection:"column"})}
`;

const Left  = styled.div`
flex: 1;
`;

const Logo = styled.h1`
${mobile({marginLeft:"10px"})}
`;

const Desc = styled.p`
margin: 20px 0px;
${mobile({marginRight:"10px",marginLeft:"10px"})}

`;
const SocialContainer = styled.div`
display: flex;
${mobile({display:"flex",alignItems:"center",justifyContent:"center"})}
`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
justify-content: center;
align-items: center;
display: flex;
margin-right: 20px;
`;


const Center  = styled.div`
flex: 1;
padding: 20px;
${mobile({display:"none"})}
`;

const Tittle = styled.h3`
 margin-bottom: 30px;

`;

const List =  styled.ul`
    margin: 0;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap
`;

const ListItem =  styled.li`
  width: 50%;
  margin-bottom: 10px
`; 

const Right  = styled.div`
flex: 1;
padding: 20px;
${mobile({backgroundColor:"#fff8f8"})}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-content: center;
`;
const Payment =  styled.img`
 width: 50%
`

const Footer = () => {
  return (
    <Container>
            <Left>
                <Logo>YUBA.</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Desc>
                <SocialContainer>
                    <SocialIcon color = '3B5999'>
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color = 'E4450F'>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color = '55ACEE'>
                        <TwitterIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Tittle>Useful Links.</Tittle>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                    <Tittle>Contact</Tittle>
                    <ContactItem>
                        <RoomIcon style={{marginRight:"10px"}}/>kg street 123
                    </ContactItem>
                    <ContactItem>
                        <PhoneIcon style={{marginRight:"10px"}}/>+250 784 381 529
                    </ContactItem>
                    <ContactItem>
                       <MailOutlineOutlinedIcon style={{marginRight:"10px"}}/> yubahwesc@gmail.com
                    </ContactItem>          
                     <Payment src='https://logodix.com/logo/601545.png'/>
            </Right>
    </Container>
  )
}

export default Footer
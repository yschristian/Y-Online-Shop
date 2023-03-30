import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import  Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components'
import { mobile } from '../Responsive';
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import { useState } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../requestMethod';
import { useNavigate } from 'react-router-dom';


const KEY=process.env.REACT_APP_STRIPE
// console.log(KEY);

const Container = styled.div``;

const Wrapper = styled.div`
 padding: 20px;
 ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopTexts = styled.div`
${mobile({display: "none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight:600;
    cursor: pointer;
    border: ${props => props.type ==="filled" && "none"};
    background-color:${props => props.type ==="filled" ? "black" : "transparent"} ;
    color:${props => props.type ==="filled" && "white"} ;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
   margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
    `;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTittle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type ==="total" && "500"};
    font-size: ${props => props.type ==="total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton  = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = () => {

    const cart = useSelector(state => state.cart)
    const [stripeToken ,setStripeToken] = useState(null)
    const navigate = useNavigate()


    const onToken = (token)=>{
        setStripeToken(token)
    }
    useEffect(()=>{
        const makeRequest = async () =>{
            try {
                const res = await userRequest.post("/checkout/payment",{
                    tokenId:stripeToken.id,
                    amount:500,
                    
                })
                
                navigate("/success",{
                    stripeData: res.data,
                    products: cart
                })
            } catch (error) {
                
            }
            stripeToken && makeRequest()          
        }
    },[stripeToken, cart.total, navigate])
    
    console.log(stripeToken);
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                  { cart.products !== undefined? cart.products.map((product) => (
                   <Product key={product.product._id} >
                        <ProductDetail >
                            <Image src={product.product.img}/>
                            <Details>
                                <ProductName><b>Product:</b> {product.product.title} </ProductName>
                                <ProductId><b>ID:</b> {product.product._id} </ProductId>
                                <ProductColor color={product.product.color}/>
                                <ProductSize><b>Size:</b>{product.product.size}</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                <RemoveIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$ {product.product.price * product.quantity}</ProductPrice>
                        </PriceDetail>
                    </Product>)):  <Product> there is no cart</Product>  }
                    <Hr />
                </Info>
                <Summary>
                    <SummaryTittle>Order Summary</SummaryTittle>
                        <SummaryItem>
                            <SummaryItemText>subtotal</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimate Shipping</SummaryItemText>
                            <SummaryItemPrice>$80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discout</SummaryItemText>
                            <SummaryItemPrice>$-34</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type ="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                        name="YubaGroup Shop"
                        image="https://res.cloudinary.com/dxpzmicmr/image/upload/v1662891492/WhatsApp_Image_2022-09-11_at_12.12.56_PM_j3lb9e.jpg" 
                        billingAddress
                        shippingAddress
                        description={`Your Total is $ ${cart.total}`} 
                        amount={cart.total * 100}  
                        token={onToken}
                        stripeKey={KEY}>
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </StripeCheckout>
                        
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
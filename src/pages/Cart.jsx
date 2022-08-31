import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import  Footer from "../components/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components'
import { mobile } from '../Responsive';


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
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2022-23-long-sleeve-with-ronaldo-7-printing_ss4_p-13324372+u-24dui9fa94utra7ygac0+v-9d3524371fde4c0a804d4b66dc48e318.jpg?_hv=1"/>
                            <Details>
                                <ProductName><b>Product:</b>UNITED JERSEY</ProductName>
                                <ProductId><b>ID:</b>866646464</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>38</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                <RemoveIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$200</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.footballfanatics.com/manchester-united/manchester-united-away-shirt-2022-23-long-sleeve-with-ronaldo-7-printing_ss4_p-13324372+u-24dui9fa94utra7ygac0+v-9d3524371fde4c0a804d4b66dc48e318.jpg?_hv=1"/>
                            <Details>
                                <ProductName><b>Product:</b>UNITED JERSEY</ProductName>
                                <ProductId><b>ID:</b>866646464</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>38</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon />
                                    <ProductAmount>2</ProductAmount>
                                <RemoveIcon />
                            </ProductAmountContainer>
                            <ProductPrice>$200</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTittle>Order Summary</SummaryTittle>
                        <SummaryItem>
                            <SummaryItemText>subtotal</SummaryItemText>
                            <SummaryItemPrice>$79</SummaryItemPrice>
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
                            <SummaryItemPrice>$90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
import styled from "styled-components"

const Container = styled.div`
   height: 30px;
   background-color: teal;
   color: white;
   display: flex;
   text-align: center;
   font-size:14px;
   justify-content: center;
   font-weight:500;
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free Sheeping on orders over $50</Container>
  )
}

export default Announcement
import React, { Component } from 'react'
import { Box } from 'grommet';
import { Card,Avatar } from 'grommet-controls';
import styled from 'styled-components';
const Csard = styled(Card)`
width: 80%;
text-align: center;
`;

const Post = (props) =>{
  const{username, text, body} = props
// console.log('props:', props);

  return(
    <Box  width='xlarge' margin='auto' align='center'>
      <Csard round='large' margin='small' width= '250vw'>
    <Card.CardTitle border='bottom'>
    <Box margin='30px'>
    <Avatar 
      image='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
      title= {<h3>{username}</h3>}/>
  </Box>  
    </Card.CardTitle>
    <Card.CardContent>
    <p>{text}</p>
     <p>{body}</p>
    </Card.CardContent>
  </Csard>
  </Box>
  )
}
export default Post;


import React, { Component } from 'react'
import { Box } from 'grommet';
import { Card,Avatar } from 'grommet-controls';
import styled from 'styled-components';
const Csard = styled(Card)`
width: 80%;
text-align: center;
`;
export default class Post extends Component {


  render() {
 console.log("username",this.props.username)
    return (
    <Box  width='xlarge' margin='auto' align='center'>
      <Csard round='large' margin='small' width= '250vw'>
    <Card.CardTitle border='bottom'>
    <Box margin='30px'>
    <Avatar 
      image='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
      title= {<h3>{this.props.username}</h3>}/>
  </Box>  
    </Card.CardTitle>
    <Card.CardContent>
    <p>{this.props.text}</p>
     <p>{this.props.body}</p>
    </Card.CardContent>
  </Csard>
  </Box>
    )
  }
}

import React, { Component } from 'react'
import { Card, Avatar } from 'grommet-controls';
import { Box } from 'grommet';

const Comment = (props) => {
  const { username,body } = props
  console.log('commentsprops:', props);

  return (
    <Box width='large' margin='auto' align='center'>
     <Card border={{ color: 'brand', size: 'medium' }}>
        <Card.CardTitle>
          <Avatar
             image='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
             />
             {<h3>{username}</h3>}
        </Card.CardTitle>
        <Card.CardContent>
        <p>{body}</p>
      </Card.CardContent>
      </Card> 

    
    </Box>
  )
}

export default Comment; 
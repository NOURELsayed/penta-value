import React, { Component } from 'react'
import { Box } from 'grommet';
export default class Post extends Component {

  render() {
    return (
      <div style={{margin: '10%30% 10% 60%',width:'900px'}}>
        {/* <h3>Posts</h3> */}
        <Box pad="xlarg" background="light-3" margin="15px" 
        justify="center"  >
          <p>{this.props.text}</p>
          <p>{this.props.body}</p>
        </Box>
      </div>
    )
  }
}

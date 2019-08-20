import React, { Component } from 'react'
import { Box } from 'grommet';
export default class Post extends Component {

  render() {
    return (
      <div style={{    margin: '10%30% 10% 80%', width:'800px'}}>
        {/* <h3>Comments</h3> */}
        <Box pad="xsmall" background="light-1" margin='10px'
          border={{ color: 'light', size: 'xxsmall', round:'medium'}}>
          <p style={{fontSize:'12px'}}>{this.props.name}</p>
          {/* <p>{this.props.email}</p> */}
          <p style={{fontSize:'12px'}}>{this.props.comment}</p>
        </Box>
      </div>
    )
  }
}
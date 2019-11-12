
import React from 'react';
import { Box, Heading } from 'grommet';
import { ImageStamp } from 'grommet-controls';
import { Link } from 'react-router-dom'

export default class Example extends React.Component {

  render() {
    console.log("profilrname",this.props.profilename)
    const Header = () => (
      <Box
        tag='header'
        background='brand'
        pad='small'
        elevation='small'
        justify='between'
        direction='row'
        align='center'
        flex={false}
      >
        <Heading level={3} margin='none'>
          <strong>FACEBOOK</strong>
        </Heading>
        <Box align='end'>
          <ImageStamp
            src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg'
            round='full'
            size='medium'
          />
       
       <Link to="/Pfrofile">{this.props.profilename}</Link>
        </Box>
      </Box>
    );
    return (
      <Box>
        <Header />
      </Box>
    );
  }
}
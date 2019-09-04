
import React from 'react';
import { Box, Heading } from 'grommet';
export default class Example extends React.Component {

  render() {
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
      </Box>
    );
    return (
      <Box>
        <Header />
      </Box>
    );
  }
}
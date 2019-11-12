import React from 'react';
import { Grommet, Box } from 'grommet'
import Routing from './containers/routing'

function App() {
  return (
    <Grommet full>
      <Box className="App">
        <Routing/>
      </Box>
    </Grommet>
  );
}

export default App;

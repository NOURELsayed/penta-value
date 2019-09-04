import React from 'react';
import Main from './components/main'
import { Grommet, Box } from 'grommet'


function App() {
  return (
<Grommet full>
<Box className="App">
      <Main/>
    </Box>
</Grommet>
  );
}

export default App;

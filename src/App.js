import React from 'react';
import Palette from './pallette'
import colors from './startColors'

function App() {
  return (
    <div>
      <Palette {...colors[4]}/>
    </div>
  );
}

export default App;

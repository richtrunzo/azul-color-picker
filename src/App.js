import React from 'react';
import Palette from './pallette'
import colors from './startColors'
import generatePalette from './lib/color-helpers'

function App() {
  console.log(generatePalette(colors[4]))
  return (
    <div>
      <Palette {...colors[4]}/>
    </div>
  );
}

export default App;

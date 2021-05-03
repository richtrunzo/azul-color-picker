import React from 'react';
import Palette from './components/pallette'
import colors from './components/startColors'
import generatePalette from './lib/color-helpers'

function App() {
  console.log(generatePalette(colors[4]))
  return (
    <div>
      <Palette palette={generatePalette(colors[4])}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

import Gallery from './components/gallery/Gallery';
import GridSelect from './components/gridSelect/GridSelect';

function App(): React.ReactElement {
  const [/* gridSize, */ setGridSize]: any = useState(2);

  return (
    <div className="App">
      <h1>Gallery</h1>
      <GridSelect setGridSize={setGridSize} />
      <Gallery /* gridSize={gridSize} */ />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

import Gallery from './components/gallery/Gallery';
import GridSelect from './components/gridSelect/GridSelect';

function App() {
  const [gridSize, setGridSize] = useState(2);
  const pictures = useState([
    {
      id: 0,
      path: require('./components/picture/svg/1.svg').default,
    },
    {
      id: 1,
      path: require('./components/picture/svg/2.svg').default,
    },

    {
      id: 2,
      path: require('./components/picture/svg/3.svg').default,
    },

    {
      id: 3,
      path: require('./components/picture/svg/4.svg').default,
    },
  ]);

  return (
    <div className="App">
      <h1>Gallery</h1>
      <GridSelect setGridSize={setGridSize} />
      <Gallery gridSize={gridSize} pictures={pictures} />
    </div>
  );
}

export default App;

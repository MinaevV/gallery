import React from 'react';

interface IProps {
  setGridSize: Function;
}

function GridSelect(props: IProps): React.ReactElement {
  return (
    <select
      className="selector"
      onChange={(e) =>
        props.setGridSize((prevGridSize: number) => {
          prevGridSize = parseInt(e.target.value);
          return prevGridSize;
        })
      }
    >
      <option value="2">2 x 2</option>
      <option value="3">3 x 3</option>
      <option value="4">4 x 4</option>
    </select>
  );
}

export default GridSelect;

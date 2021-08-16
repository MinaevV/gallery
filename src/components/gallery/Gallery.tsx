import React from 'react';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function Gallery(props: any) {
  // console.log(props.gridSize);
  const picList = props.pictures[0];
  console.log(picList.length);

  // picList.map((item: any) => console.log(item));

  return (
    <div className="gallery">
      <div className="gallery__row">
        <img src={`${picList[0].path}`} alt="" />
        <img src={`${picList[1].path}`} alt="" />
      </div>

      <div className="gallery__row">
        <img src={`${picList[2].path}`} alt="" />
        <img src={`${picList[3].path}`} alt="" />
      </div>
    </div>
  );
}

export default Gallery;

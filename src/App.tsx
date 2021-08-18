import React, { useEffect, useState } from 'react';
import './App.css';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragMoveEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import { Grid } from './components/grid/Grid';
import { SortablePhoto } from './components/sortablePhoto/SortablePhoto';
import { Photo } from './components/photo/Photo';
import GridSelect from './components/grid/GridSelect';

export interface IItem {
  id: string;
  src: string;
  map?: Function;
}

const photosDefaul = [
  {
    id: '0',
    src: require('./components/photo/svg/1.svg').default,
  },
  {
    id: '1',
    src: require('./components/photo/svg/2.svg').default,
  },
  {
    id: '2',
    src: require('./components/photo/svg/3.svg').default,
  },

  {
    id: '3',
    src: require('./components/photo/svg/4.svg').default,
  },

  {
    id: '4',
    src: require('./components/photo/svg/5.svg').default,
  },

  {
    id: '5',
    src: require('./components/photo/svg/6.svg').default,
  },

  {
    id: '6',
    src: require('./components/photo/svg/7.svg').default,
  },
  {
    id: '7',
    src: require('./components/photo/svg/8.svg').default,
  },

  {
    id: '8',
    src: require('./components/photo/svg/9.svg').default,
  },

  {
    id: '9',
    src: require('./components/photo/svg/10.svg').default,
  },

  {
    id: '10',
    src: require('./components/photo/svg/11.svg').default,
  },

  {
    id: '11',
    src: require('./components/photo/svg/12.svg').default,
  },

  {
    id: '12',
    src: require('./components/photo/svg/13.svg').default,
  },

  {
    id: '13',
    src: require('./components/photo/svg/14.svg').default,
  },

  {
    id: '14',
    src: require('./components/photo/svg/15.svg').default,
  },

  {
    id: '15',
    src: require('./components/photo/svg/16.svg').default,
  },
];

const itemsFromLS = () => {
  if (localStorage.getItem('itemsOrder')) {
    const photosLS = JSON.parse(localStorage.getItem('itemsOrder') || `[]`);
    return photosLS;
  } else return photosDefaul;
};

const gridSizeLS = () => {
  if (localStorage.getItem('gridSize')) {
    const gridSizeLS = JSON.parse(localStorage.getItem('gridSize') || `[]`);
    return gridSizeLS;
  } else return 2;
};

function Gallery(): React.ReactElement {
  const [items, setItems] = useState(itemsFromLS());
  const [gridSize, setGridSize] = useState(gridSizeLS());
  const [activeId, setActiveId] = useState(-1);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  useEffect(() => {
    localStorage.setItem('itemsOrder', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('gridSize', JSON.stringify(gridSize));
  }, [gridSize]);

  return (
    <div className="App">
      <h1>Gallery</h1>
      <GridSelect gridSize={gridSize} setGridSize={setGridSize} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <Grid columns={gridSize}>
            {items.map((item: IItem) => (
              <SortablePhoto key={item.id} id={item.id} src={item.src} />
            ))}
          </Grid>
        </SortableContext>

        <DragOverlay>
          {activeId !== -1 ? (
            <Photo
              style={{ filter: 'invert(0.2)', cursor: 'grabbing' }}
              index={activeId}
              src={
                items[
                  items.map((item: IItem) => item.id).indexOf(`${activeId}`)
                ].src
              }
            />
          ) : (
            -1
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function handleDragStart(event: DragMoveEvent) {
    setActiveId(+event.active.id);
  }

  function handleDragEnd(event: DragMoveEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items: IItem[]) => {
        const oldIndex = items
          .map((item: IItem) => item.id)
          .indexOf(`${active.id}`);
        const newIndex = items
          .map((item: IItem) => item.id)
          .indexOf(`${over?.id}`);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
    return setActiveId(-1);
  }

  function handleDragCancel() {
    setActiveId(-1);
  }
}

export default Gallery;

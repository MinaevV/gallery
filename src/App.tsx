import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

import { Grid } from './components/grid/Grid';
import { SortablePhoto } from './components/sortablePhoto/SortablePhoto';
import { Photo } from './components/photo/Photo';

const photos = [
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

const UploadGallery = (): any => {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(-1);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        <Grid columns={4}>
          {items.map((item) => (
            <SortablePhoto key={item.id} index={item.id} src={item.src} />
          ))}
        </Grid>
      </SortableContext>

      <DragOverlay>
        {activeId ? <Photo index={/* items.indexOf(activeId) */ 0} /> : null}
      </DragOverlay>
    </DndContext>
  );

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(-1);
  }

  function handleDragCancel() {
    setActiveId(-1);
  }
};

export default UploadGallery;

import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Photo } from '../photo/Photo';
import { IItem } from '../../App';

export const SortablePhoto = (props: IItem): React.ReactElement => {
  const sortable = useSortable({ id: props.id });
  const { attributes, listeners, setNodeRef, transform, transition } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Photo
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      {...props}
    />
  );
};

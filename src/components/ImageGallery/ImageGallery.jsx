import React from 'react';
import { ListImageGallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = ({ images, onItemClick }) => {
  return (
    <ListImageGallery>
      {images.map(image => (
        <ImageGalleryItem
          key={nanoid()}
          image={image}
          onItemClick={onItemClick}
        />
      ))}
    </ListImageGallery>
  );
};

export default ImageGallery;

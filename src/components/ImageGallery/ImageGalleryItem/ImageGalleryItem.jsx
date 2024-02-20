import React from 'react';
import { Image, ItemImageGallery } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onItemClick }) => {
  return (
    <ItemImageGallery>
      <Image
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => onItemClick(image.largeImageURL)}
      />
    </ItemImageGallery>
  );
};

export default ImageGalleryItem;

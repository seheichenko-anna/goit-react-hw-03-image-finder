import React from 'react';
import { ButtonLoadMore } from './Button.styled';

function Button({ onClick }) {
  return <ButtonLoadMore onClick={onClick}>Load more</ButtonLoadMore>;
}

export default Button;

import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { fetchImagesWithQuery } from '../api';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import { Container } from './App.styled';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  handleSetQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  fetchImages = async () => {
    const { searchQuery } = this.state;
    this.setState({ images: [] });
    try {
      this.setState({ isLoading: true });
      const images = await fetchImagesWithQuery(searchQuery, 1);
      this.setState({ images, page: 1 });
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMoreImages = async () => {
    const { searchQuery, page } = this.state;
    const nextPage = page + 1;
    try {
      this.setState({ isLoading: true });
      const newImages = await fetchImagesWithQuery(searchQuery, nextPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
        page: nextPage,
      }));
    } catch (error) {
      console.error('Error fetching more images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleOpenModal = largeImageURL => {
    document.body.style.overflow = 'hidden';
    this.setState({ showModal: true, largeImageURL });
  };

  handleCloseModal = () => {
    document.body.style.overflow = 'auto';
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { showModal, largeImageURL, images, isLoading } = this.state;
    return (
      <Container>
        <Searchbar handleSetQuery={this.handleSetQuery} />
        <ImageGallery images={images} onItemClick={this.handleOpenModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleLoadMoreImages} />
        )}
        {showModal && (
          <Modal
            largeImageURL={largeImageURL}
            onClose={this.handleCloseModal}
          />
        )}
      </Container>
    );
  }
}

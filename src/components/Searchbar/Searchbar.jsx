import React, { Component } from 'react';
import {
  SearchForm,
  ButtonSearch,
  ButtonSearchLabel,
  SearchBar,
  InputSearch,
} from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleChangeSearchInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSearchFormSubmit = e => {
    e.preventDefault();
    const { searchValue } = this.state;
    if (searchValue) {
      this.props.handleSetQuery(searchValue);
      this.setState({ searchValue: '' });
    }
    return;
  };

  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSearchFormSubmit}>
          <ButtonSearch type="submit">
            <ButtonSearchLabel>Search</ButtonSearchLabel>
          </ButtonSearch>

          <InputSearch
            type="text"
            name="searchValue"
            value={this.state.searchValue}
            onChange={this.handleChangeSearchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

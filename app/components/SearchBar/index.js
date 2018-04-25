/**
*
* SearchBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { styledElements, getActive } from 'themes';
import styled from 'styled-components';
import messages from './messages';

class SearchBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      selection: 'Search the Database',
      destination: null,
      query: ' ',
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const text = document.getElementById('search').value;
    this.props.handler(this.state.destination, text);
  }

  changeSelection = (e) => {
    let message = '';
    switch (e.target.value) {
      case 'basic':
        message = messages.DefaultPlaceHolder.defaultMessage;
        break;
      case 'target':
        message = messages.TargetPlaceHolder.defaultMessage;
        break;
      case 'experiment':
        message = messages.ExperimentPlaceHolder.defaultMessage;
        break;
      case 'citation':
        message = messages.CitationPlaceHolder.defaultMessage;
        break;
      default:
        message = 'Search the Database';
    }
    this.setState({
      selection: message,
      destination: e.target.value,
    });
  }

  render() {
    const Search = styledElements.SearchBar;
    const Submit = styledElements.Submit;
    const theme = getActive();
    const Select = styled.select`
      border: 1px solid black;
      margin-left: 5px;
      border-radius: 2px;
      background-color: ${theme.get('primary')};
      margin-bottom: 10px;
      height: 25px;
    `;
    return (
      <div>
        <Select onChange={this.changeSelection}>
          <option value={null} hidden>Select Form</option>
          <option value="basic">{messages.DefaultPlaceHolder.defaultMessage}</option>
          <option value="target">{messages.TargetPlaceHolder.defaultMessage}</option>
          <option value="experiment">{messages.ExperimentPlaceHolder.defaultMessage}</option>
          <option value="citation">{messages.CitationPlaceHolder.defaultMessage}</option>
        </Select>
        <br />
        <form onSubmit={(e) => this.onSubmit(e)}>
          <Search id="search" type="text" placeholder={this.state.selection} /> <Submit type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default SearchBar;

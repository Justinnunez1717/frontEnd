/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import SearchBar from 'components/SearchBar';
import ListView from 'components/ListView';
import AdvancedSearch from 'components/AdvancedSearch';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getEntry } from './actions';
import messages from './messages';
import '../../images/CheMoa_Transparent.png';


export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
    this.submit = this.submit.bind(this);
    this.submitAdvanced = this.submitAdvanced.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
    this.state = {
      search: <SearchBar handler={this.submit} />,
      searchText: 'Advanced Search',
    };
  }
  navigate(path) {
    this.props.dispatch(push(path));
  }
  submit(destination, text) {
    console.log('in homepage submit');
    console.log('destination', destination, 'text', text);
    this.props.dispatch(getEntry(null, { q: text }));
  }
  submitAdvanced(e, data) {
    console.log('in homepage submitAdvanced');
    console.log('e: ', e, 'data: ', data);
  }
  changeSearch() {
    let s = <div />;
    let sT = '';
    if (this.state.searchText === 'Basic Search') {
      s = <SearchBar handler={this.submit} />;
      sT = 'Advanced Search';
    } else if (this.state.searchText === 'Advanced Search') {
      s = <AdvancedSearch handler={this.submitAdvanced} />;
      sT = 'Basic Search';
    }
    this.setState({
      search: s,
      searchText: sT,
    });
  }
  render() {
    const FlexBox = styled.div`
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
    `;
    const data = (this.props.homepage.hasRecievedData) ? Object.entries(this.props.homepage.searchResults) : [];
    const shownResults = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][1].length > 0) {
        shownResults.push(<ListView entries={data[i][1]} key={i.toString()} />);
      }
    }
    const CenterImage = styled.div`
      display: -webkit-flex;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0,0,0,0);
    `;

    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        <CenterImage>
          <Image src="/CheMoa_Transparent.png" />
        </CenterImage>
        <p className="text-center"><FormattedMessage {...messages.description} /></p>
        <FlexBox >
          { this.state.search } <a role="button" onClick={this.changeSearch}>{this.state.searchText}</a>
        </FlexBox>
        {shownResults}
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  homepage: PropTypes.shape({
    hasRecievedData: PropTypes.bool.isRequired,
    searchResults: PropTypes.object,
  }),
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);

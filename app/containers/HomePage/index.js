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

import styled from 'styled-components';
import { styledElements } from 'themes';
import Form from 'components/Form/index';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { SCHEMAS } from '../App/constants';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this);
  }
  navigate(path) {
    this.props.dispatch(push(path));
  }
  render() {
    const Logo = styledElements.Logo;
    const FlexBox = styled.div`
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
    `;
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Home Page" />
        </Helmet>
        <Logo />
        <FlexBox>
          <Form schema={SCHEMAS.search} />
        </FlexBox>
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
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

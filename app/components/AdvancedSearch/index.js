/**
*
* AdvancedSearch
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { getActive } from 'themes';
import styled from 'styled-components';
import Form from 'components/Form/index';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { SCHEMAS } from '../../containers/App/constants';

class AdvancedSearch extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.changeSelection = this.changeSelection.bind(this);
    this.changeInnerSelection = this.changeInnerSelection.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      options: [],
      selected: SCHEMAS.blank,
    };
    this.changeSelection = this.changeSelection.bind(this);
  }
  onSubmit(e) {
    const fields = document.getElementById('entryData').children;
    const data = {};
    for (let i = 0; i < fields.length; i += 1) {
      if (fields[i].name === undefined || fields[i].name === '') {
        window.alert('This entry has not defined connection to database');
        return;
      }
      if (fields[i].value) {
        data[fields[i].name] = fields[i].value;
      }
    }
    this.props.handler(e, data);
  }
  changeSelection = (e) => {
    const opts = SCHEMAS[e.target.value].map((value, index) =>
      <option value={value.type} key={index.toString()}>{value.label}</option>
    );
    this.setState({ options: opts });
  };
  changeInnerSelection = (e) => {
    let select = [{}];
    if (e.target.value === 'number') {
      select = [
        { type: 'number', label: ' Lower bound', name: 'lowerBound' },
        { type: 'number', label: ' Upper bound', name: 'higherBound' },
      ];
    } else if (e.target.value === 'text') {
      select = [
        { type: e.target.value, label: ' ', name: ' ' },
        { type: 'checkbox', label: ' Exact Match', name: 'exact',  style: { marginLeft: '5px', marginRight: '5px', width: '25px', float: 'left' } },
      ];
    } else {
      select = [
        { type: e.target.value, label: ' ', name: ' ' },
      ];
    }
    this.setState({ selected: select });
  }

  render() {
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
          <option value="blank" hidden>Select Table</option>
          <option value="target">Target</option>
          <option value="citation">Citation</option>
          <option value="experiment">Experiment</option>
        </Select>
        <Select onChange={this.changeInnerSelection}>
          <option value="blank" hidden>Select Attribute</option>
          {this.state.options}
        </Select>
        <Form schema={this.state.selected} schemaType="advanced" handler={this.onSubmit} />
      </div>
    );
  }
}

AdvancedSearch.propTypes = {
  handler: PropTypes.func,
};

export default AdvancedSearch;

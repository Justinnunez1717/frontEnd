/**
*
* Form
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { styledElements } from 'themes';

class Form extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidUpdate(prevProps) {
    if (this.props.schemaType !== prevProps.schemaType) {
      const fields = document.getElementById('entryData').children;
      for (let i = 0; i < fields.length; i += 1) {
        fields[i].value = null;
      }
    }
  }

  render() {
    const Submit = styledElements.Submit;
    const Input = styledElements.Input;
    const flexT = {
      display: 'flex',
      display: '-webkit-flex',
      flexDirection: 'column',
      margin: 'auto',
      maxWidth: '700px',
    };

    const schema = this.props.schema.map((value, index) =>
      <div>{value.label}<Input type={value.type} placeholder={value.label} defaultValue={value.label} name={value.name} style={value.style} key={index.toString()} /></div>
    );
    return (
      <div>
        <form onSubmit={(evt) => { evt.preventDefault(); this.props.handler(this.props.schemaType); }} >
          <div style={flexT} id="entryData"> { schema } </div>
          <Submit type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  schema: PropTypes.array.isRequired,
  schemaType: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Form;

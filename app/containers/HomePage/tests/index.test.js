import React from 'react';
import { shallow } from 'enzyme';

import Form from 'components/Form/index';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('Expect to have a <Form /> component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find(Form).length).toEqual(1);
  });

  // it('Expect to have 3 <BigBtn1 /> components in a FlexBox', () => {
  //   const wrapper = shallow(<HomePage />);
  //   expect(wrapper.find(FlexBox).length).toEqual(1);
  //   expect(wrapper.find(BigBtn1).length).toEqual(3);
  // });
  //
  // it('Expect each <BigBtn /> component to have a valid link', () => {
  //   const wrapper = shallow(<HomePage />);
  //
  // })
});

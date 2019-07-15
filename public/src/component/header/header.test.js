import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

import { findByTestAtrr } from '../../../../Utils'

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
}



describe("Header component", () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('it should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
    // const wrapper = shallow(<Header />);
  })
  it('Should render a logo', () => {
    const logo = component.find('.logoImg');
    expect(logo.length).toBe(1);
  })
})
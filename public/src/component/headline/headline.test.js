import React from 'react';
import { shallow } from 'enzyme';
import Headline from './headlines';

import { findByTestAtrr, checkProps } from '../../../../Utils'

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline Component', () => {

  describe('Checking proptypes', () => {
    it('should not throw a warning', () => {

      const expectedProps = {
        header: "test",
        desc: 'test desc',
        tempArr: [{
          fName: 'test fname',
          lName: 'test lname',
          email: 'test@email.com',
          age: 23,
          onlineStatus: false
        }]
      }
      const propsErr = checkProps(Headline, expectedProps)
      expect(propsErr).toBeUndefined();
    })
  })

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test desc'
      };
      wrapper = setup(props);
    })

    it('should render without errors', () => {
      const component = findByTestAtrr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    })

    it('should render a H1', () => {
      const h1 = findByTestAtrr(wrapper, 'header')
      expect(h1.length).toBe(1);
    })

    it('should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    })

  })

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
      })

    it('should not render', () => {
      const component = findByTestAtrr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    })

  })
})
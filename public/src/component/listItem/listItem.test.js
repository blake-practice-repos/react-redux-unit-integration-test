import React from 'react';
import ListItem from './index';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../../../Utils'

describe('ListItem Component', () => {

  describe('CHecking proptypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        title: "example title",
        desc: 'some text'
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    })
  })

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "example title",
        desc: 'some text'
      }
      wrapper = shallow(<ListItem {...props}/>)
    })
    it('should render without error', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    })

    it('should render a title', () => {
      const title = findByTestAtrr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    })

    it('should render a desc', () => {
      const desc = findByTestAtrr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    })
  })

  describe('should not render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'some text'
      }
      wrapper = shallow(<ListItem {...props}/>)
    })
    it('component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0)
    })
  })
})
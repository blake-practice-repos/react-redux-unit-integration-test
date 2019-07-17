import React from 'react';
import { findByTestAtrr, checkProps } from '../../../../Utils/index';
import SharedButton from './index';
import { shallow } from 'enzyme';

describe('Shared Button Component', () => {

  describe('Checking proptypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: "Example Button",
        emitEvent: () => {

        }
      }
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    })
  })

  describe('Renders', () => {

    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button",
        emitEvent: () => {
        }
      }
      wrapper = shallow(<SharedButton />);
    })
    it('should render a button', () => {
      const button = findByTestAtrr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    })
  })
})
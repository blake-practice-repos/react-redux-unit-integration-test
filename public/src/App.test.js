import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore } from '../../Utils';
import React from 'react';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  // console.log(wrapper.debug())
  return wrapper;
}

describe('App component', () => {

  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [{
        title: "example title1",
        body: 'some text'
      },{
        title: "example title2",
        body: 'some text'
      },{
        title: "example title3",
        body: 'some text'
      },]
    }
    wrapper = setup(initialState);
  })

  it('should render without errors', () => {
    const component = findByTestAtrr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  })

  it('exampleMethod_updateState Method should update state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  })

  it('returnsAvalue should return value as expected', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.returnsAvalue(5);
    expect(newValue).toBe(6);
  })
})
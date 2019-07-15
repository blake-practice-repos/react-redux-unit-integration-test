import React, { Component } from 'react';
import './app.scss'

import Header from './component/header'
import Headline from './component/headline/headlines';


const tempArr = [{
  fName: 'Joe',
  lName: 'Lee',
  email: 'blake@gmail.com',
  age: 24,
  onlineStatus: true
}]

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Headline header={"Posts"} desc="Click the button to render posts" tempArr={tempArr}/>
        </section>
      </div>
    )
  }
}
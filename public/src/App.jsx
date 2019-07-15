import React, { Component } from 'react';
import './app.scss'

import Header from './component/header'
import Headline from './component/headline/headlines';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Headline header="Posts" desc="Click the button to render posts"/>
        </section>
      </div>
    )
  }
}
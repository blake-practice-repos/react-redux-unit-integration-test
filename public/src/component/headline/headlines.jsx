import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './headline.scss';


export default class Headline extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { header, desc } = this.props;
    
    if (!header) {
      return null;
    }
    
    return(
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="desc">
          {desc}
        </p>
      </div>
    )
  }
}
Headline.proptypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineState: PropTypes.bool
  }))
}
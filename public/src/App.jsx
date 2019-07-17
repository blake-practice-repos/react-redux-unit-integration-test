import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss'
import '@babel/polyfill';

import Header from './component/header'
import Headline from './component/headline/headlines';
import SharedButton from './component/button';
import ListItem from './component/listItem';



const tempArr = [{
  fName: 'Joe',
  lName: 'Lee',
  email: 'blake@gmail.com',
  age: 24,
  onlineStatus: true
}]

class App extends Component {
  constructor(props) {
    super(props)
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
  }
  render() {
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }
    const { posts } = this.props;
    return (
      <div className="App">
        <Header />
        <section>
          <Headline header={"Posts"} desc="Click the button to render posts" tempArr={tempArr}/>
          <SharedButton {...configButton} />
          {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem {...configListItem} key={index}/>
                )
              })}
            </div>
          }
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App)
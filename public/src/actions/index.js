import { types } from './types';
import axios from 'axios';
import '@babel/polyfill'

export const fetchPosts = () => async (dispatch) => {
  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(res => {
    dispatch({
      type: types.GET_POSTS,
      payload: res.data
    })
  })
  .catch(err => {

  })
}
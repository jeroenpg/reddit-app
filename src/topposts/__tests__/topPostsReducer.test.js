import initialState from '../topPostsActionsInitialState';
import postsReducer from '../../topposts/topPostsReducer';
import {posts, postsResponse} from '../../shared/config/mockData';
import filterReducer from '../../filter/filterReducer';
import {FETCH_MORE_POSTS, FETCH_POSTS, FETCH_REFRESHED_POSTS} from '../topPostsActionTypes';

describe('postsReducer', () => {
  it(`returns the same state for posts reducer on an unhandled action`, () => {
    expect(filterReducer(initialState, {type: '_NULL'})).toMatchSnapshot();
  });

  it(`handles ${FETCH_POSTS.request} action`, () => {
    expect(postsReducer(initialState, FETCH_POSTS.request)).toMatchSnapshot();
  });

  it(`handles ${FETCH_POSTS.failure} action`, () => {
    expect(postsReducer(initialState, {error: 'Look ma, I am an error!', type: FETCH_POSTS.failure}))
      .toMatchSnapshot();
  });

  it(`handles ${FETCH_POSTS.success} action`, () => {
    expect(postsReducer(initialState, {data: postsResponse, type: FETCH_POSTS.success})).toMatchSnapshot();
  });

  it(`handles ${FETCH_MORE_POSTS.request} action`, () => {
    expect(postsReducer(initialState, FETCH_MORE_POSTS.request)).toMatchSnapshot();
  });

  it(`handles ${FETCH_MORE_POSTS.failure} action`, () => {
    expect(postsReducer(initialState, {error: 'Look ma, I am an error!', type: FETCH_MORE_POSTS.failure}))
      .toMatchSnapshot();
  });

  it(`handles ${FETCH_MORE_POSTS.success} action`, () => {
    expect(postsReducer({...initialState, posts}, {
      data: postsResponse,
      type: FETCH_MORE_POSTS.success,
    })).toMatchSnapshot();
  });

  it(`handles ${FETCH_REFRESHED_POSTS.request} action`, () => {
    expect(postsReducer(initialState, FETCH_REFRESHED_POSTS.request)).toMatchSnapshot();
  });

  it(`handles ${FETCH_REFRESHED_POSTS.failure} action`, () => {
    expect(postsReducer(initialState, {error: 'Look ma, I am an error!', type: FETCH_REFRESHED_POSTS.failure}))
      .toMatchSnapshot();
  });

  it(`handles ${FETCH_REFRESHED_POSTS.success} action`, () => {
    expect(postsReducer(initialState, {data: postsResponse, type: FETCH_REFRESHED_POSTS.success})).toMatchSnapshot();
  });
});

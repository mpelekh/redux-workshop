import { takeEvery } from 'redux-saga/effects'
import { POSTS_ACTIONS, fetchPosts } from '../modules/posts'

export default function* rootSaga() {
  yield takeEvery(POSTS_ACTIONS.GET_POSTS, fetchPosts)
}

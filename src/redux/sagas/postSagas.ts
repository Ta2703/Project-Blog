import axios from "axios";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchPostByIdFailure,
  fetchPostByIdSuccess,
  fetchPostByIdRequest,
  fetchPostSort,
} from "../actions/postsActions";
import { postTypes } from "../actionsTypes/postsTypes";
import { API_ROOT } from "../sagas/rootSaga";
import { IPagination, IPost  } from "../IPagination/IPagination";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const getItemsPerPage = (state: IPagination) => state.pagination.itemsPerPage;
const getPosts = (state: any) => state.posts.posts;

function* fetchPostsSaga(action: any = "") {
  try {
    let itemsPerPage: number = yield select(getItemsPerPage);
    const getPosts = (param: any) =>
      axios.get<IPost[]>(`${API_ROOT}/blogs?_limit=${itemsPerPage}${param}`);

    const response: ResponseGenerator = yield call(getPosts, action.param);

    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

function* fetchPostByIdSaga(action: any) {
  try {
    const getPost = (id: number) =>
      axios.get<IPost[]>(`${API_ROOT}/blogs/${id}`);

    const response: ResponseGenerator = yield call(getPost, action.id);

    yield put(
      fetchPostByIdSuccess({
        selectedPost: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostByIdFailure({
        error: e.message,
      })
    );
  }
}

function* fetchPostSortSaga(action: any) {
  try {
    const newPost: any = [];

    const response: ResponseGenerator = yield select(getPosts);

    yield put(
      fetchPostsSuccess({
        posts: action.payload,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostByIdFailure({
        error: e.message,
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
  yield all([
    takeLatest(postTypes.FETCH_POST_BY_ID_REQUEST, fetchPostByIdSaga),
  ]);
  yield all([takeLatest(postTypes.FETCH_POST_SORT, fetchPostSortSaga)]);
}

export default postsSaga;
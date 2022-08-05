import { postTypes } from "../actionsTypes/postsTypes";
import { PostsActions, PostsState } from "../types/types";

const initialState: PostsState = {
  pending: false,
  posts: [],
  error: null,
  selectedPost: null,
};

export default (state = initialState, action: PostsActions) => {
  switch (action.type) {
    case postTypes.FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        selectedPost: null,
        error: null,
      };
    case postTypes.FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        selectedPost: null,
        error: action.payload.error,
      };
    case postTypes.FETCH_POST_BY_ID_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_POST_BY_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        selectedPost: action.payload.selectedPost,
        error: null,
      };
    case postTypes.FETCH_POST_BY_ID_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        selectedPost: null,
        error: action.payload.error,
      };
    case postTypes.FETCH_POST_SORT:
      return {
        ...state,
        posts: action.payload.posts,
      };
    default:
      return {
        ...state,
      };
  }
};
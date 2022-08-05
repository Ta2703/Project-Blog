import { postTypes } from "../actionsTypes/postsTypes";
import {
  FetchPostsFailure,
  FetchPostsFailurePayload,
  FetchPostsRequest,
  FetchPostsSuccess,
  FetchPostsSuccessPayload,
  FetchPostByIdRequest,
  FetchPostByIdSuccess,
  FetchPostByIdFailure,
  FetchPostSort,
} from "../types/types";

export const fetchPostsRequest = (param: any): FetchPostsRequest => ({
  type: postTypes.FETCH_POST_REQUEST,
  param,
});

export const fetchPostsSuccess = (
  payload: FetchPostsSuccessPayload
): FetchPostsSuccess => ({
  type: postTypes.FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostsFailure = (
  payload: FetchPostsFailurePayload
): FetchPostsFailure => ({
  type: postTypes.FETCH_POST_FAILURE,
  payload,
});

export const fetchPostByIdRequest = (id: number): FetchPostByIdRequest => ({
  type: postTypes.FETCH_POST_BY_ID_REQUEST,
  id,
});

export const fetchPostByIdSuccess = (payload: any): FetchPostByIdSuccess => ({
  type: postTypes.FETCH_POST_BY_ID_SUCCESS,
  payload,
});

export const fetchPostByIdFailure = (payload: any): FetchPostByIdFailure => ({
  type: postTypes.FETCH_POST_BY_ID_FAILURE,
  payload,
});

export const fetchPostSort = (payload: any): FetchPostSort => ({
  type: postTypes.FETCH_POST_SORT,
  payload,
});
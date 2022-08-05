import { IPost } from "../../redux/IPagination/IPagination";
import { postTypes } from "../actionsTypes/postsTypes";
import {
  paginationIncrementTypes,
  paginationDecrementTypes,
  paginationClearTypes,
} from "../actionsTypes/paginationTypes";

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
  selectedPost: any;
}

export interface PaginationState {
  pending: boolean;
  currentPage: number;
  itemsPerPage: number;
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostSuccessPayload {
  selectedPost: any;
}

export interface FetchPostFailurePayload {
  error: string;
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
  param: any;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export interface FetchPostByIdRequest {
  type: typeof postTypes.FETCH_POST_BY_ID_REQUEST;
  id: number;
}

export type FetchPostByIdSuccess = {
  type: typeof postTypes.FETCH_POST_BY_ID_SUCCESS;
  payload: FetchPostSuccessPayload;
};

export type FetchPostByIdFailure = {
  type: typeof postTypes.FETCH_POST_BY_ID_FAILURE;
  payload: FetchPostFailurePayload;
};

export interface FetchPaginationSuccessPayload {
  currentPage: number;
}

export interface FetchPaginationFailurePayload {
  error: string;
}

export interface FetchPaginationIncrementRequest {
  type: typeof paginationIncrementTypes.INCREMENT_PAGINATION_ACTION;
}

export type FetchPaginationIncrementSuccess = {
  type: typeof paginationIncrementTypes.INCREMENT_PAGINATION_SUCCESS;
  payload: FetchPaginationSuccessPayload;
};
export type FetchPaginationIncrementFailure = {
  type: typeof paginationIncrementTypes.INCREMENT_PAGINATION_FAILURE;
  payload: FetchPaginationFailurePayload;
};

export interface FetchPaginationDecrementRequest {
  type: typeof paginationDecrementTypes.DECREMENT_PAGINATION_ACTION;
}

export type FetchPaginationDecrementSuccess = {
  type: typeof paginationDecrementTypes.DECREMENT_PAGINATION_SUCCESS;
  payload: FetchPaginationSuccessPayload;
};
export type FetchPaginationDecrementFailure = {
  type: typeof paginationDecrementTypes.DECREMENT_PAGINATION_FAILURE;
  payload: FetchPaginationFailurePayload;
};

export type FetchPostSort = {
  type: typeof postTypes.FETCH_POST_SORT;
  payload: any;
};

export interface ClearPaginationAction {
  type: typeof paginationClearTypes.ClEAR_PAGINATION_ACTION;
}

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
  | FetchPostByIdRequest
  | FetchPostByIdSuccess
  | FetchPostByIdFailure
  | FetchPostSort;

export type PaginationIncrementActions =
  | FetchPaginationIncrementRequest
  | FetchPaginationIncrementSuccess
  | FetchPaginationIncrementFailure;

export type PaginationDecrementActions =
  | FetchPaginationDecrementRequest
  | FetchPaginationDecrementSuccess
  | FetchPaginationDecrementFailure;

export type PaginationCLearActions = ClearPaginationAction;
import {
    paginationDecrementTypes,
    paginationIncrementTypes,
    paginationClearTypes,
  } from "../actionsTypes/paginationTypes";
  import {
    PaginationIncrementActions,
    PaginationDecrementActions,
    PaginationState,
  } from "../types/types";
  
  const initialState: PaginationState = {
    pending: false,
    currentPage: 1,
    itemsPerPage: 12,
    error: null,
  };
  
  export default (state = initialState, action: any) => {
    switch (action.type) {
      case paginationIncrementTypes.INCREMENT_PAGINATION_ACTION:
        return {
          ...state,
          pending: true,
        };
      case paginationIncrementTypes.INCREMENT_PAGINATION_SUCCESS:
        return {
          ...state,
          pending: false,
          currentPage: action.payload.currentPage,
          itemsPerPage: 12,
          error: null,
        };
      case paginationIncrementTypes.INCREMENT_PAGINATION_FAILURE:
        return {
          ...state,
          pending: false,
          currentPage: null,
          itemsPerPage: null,
          error: action.payload.error,
        };
      case paginationDecrementTypes.DECREMENT_PAGINATION_ACTION:
        return {
          ...state,
          pending: true,
        };
      case paginationDecrementTypes.DECREMENT_PAGINATION_SUCCESS:
        return {
          ...state,
          pending: false,
          currentPage: action.payload.currentPage,
          itemsPerPage: 9,
          error: null,
        };
      case paginationDecrementTypes.DECREMENT_PAGINATION_FAILURE:
        return {
          ...state,
          pending: false,
          currentPage: null,
          itemsPerPage: null,
          error: action.payload.error,
        };
      case paginationClearTypes.ClEAR_PAGINATION_ACTION:
        return {
          ...state,
          currentPage: 1,
        };
      default:
        return {
          ...state,
        };
    }
  };
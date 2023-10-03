import { createReducer, on } from "@ngrx/store";
import { GenericState } from "../../../shared/models/GenericState";
import { Product } from "src/app/domain/models/product/product";
import * as productActions from '../actions/product-actions';
import { BasePagedModel } from "src/app/domain/models/common/BasePagedModel";

const initialState : GenericState<Product> ={
  model: null,
  list: [],
  currentPage: 0,
  pageSize: 5,
  keyWord: '',
  isLoading: false,
  isLoadingFailure: false,
  isLoadingSuccess: false
}

export const productsReducer =  createReducer(
  initialState,
  on(productActions.getProducts, ((state: GenericState<Product>) => ({...state, isLoadingFailure: false, isLoadingSuccess: false, isLoading: true }))),
  on(productActions.getProductsSuccess, ((state: GenericState<Product>, result: BasePagedModel<Product>)  => ({
    ...state,
    isLoadingFailure: false,
    isLoadingSuccess: true,
    isLoading: false,
    list: result.rows
  }))),
  on(productActions.getProductsFailure, ((state: GenericState<Product>) => ({...state, isLoadingFailure: true, isLoadingSuccess: false, isLoading: false }))));

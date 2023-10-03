import { createAction, props } from "@ngrx/store";
import { PageParams } from "src/app/domain/models/base/pageParams";
import { BasePagedModel } from "src/app/domain/models/common/BasePagedModel";
import { Product } from "src/app/domain/models/product/product";

const GET_PRODUCTS = '[Product Page] get products';
const GET_PRODUCTS_SUCCESS = '[Product Page] get products success';
const GET_PRODUCTS_FAILURE = '[Product Page] get products failure';

export const getProducts =  createAction(GET_PRODUCTS, props<{ params: PageParams }>())
export const getProductsSuccess =  createAction(GET_PRODUCTS_SUCCESS, props<BasePagedModel<Product>>())
export const getProductsFailure =  createAction(GET_PRODUCTS_FAILURE, props<any>())

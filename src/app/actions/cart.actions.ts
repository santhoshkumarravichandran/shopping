import {
    Action, createAction, props
} from '@ngrx/store';
import { Product,Category, CartProduct, AppState } from '../interface';


export enum CartActionTypes {
    DELETE_PRODUCT = "DELETE PRODUCT",
    DELETE_PRODUCT_SUCCESS = '[DELETE] Product Success',
    DELETE_PRODUCT_FAILURE = '[DELETE] Product Failure',
    UPDATE_PRODUCT = '[UPDATE] Product',
    UPDATE_PRODUCT_SUCCESS = '[UPDATE] Product Success',
    UPDATE_PRODUCT_FAILURE = '[UPDATE] Product Failure',
    UPDATE_CART = '[UPDATE] Product',
    UPDATE_CART_SUCCESS = '[UPDATE] Product Success',
    UPDATE_CART_FAILURE = '[UPDATE] Product Failure',
    CLEAR_CART = '[CLEAR] CART',
    CLEAR_CART_SUCCESS = '[CLEAR] CART Success',
    CLEAR_CART_FAILURE = '[CLEAR] CART Failure',
    ADD_CATEGORY = '[ADD] Category',
    ADD_CATEGORY_SUCCESS = '[ADD] Category Success',
    ADD_CATEGORY_FAILURE = '[ADD] Category Failure'
}

export const SET_USER_ID = createAction(
    '[SET] User Id to store',
    props<{userId: string}>()
);

export const LOAD_PRODUCTS = createAction(
    '[LOAD PRODUCTS] populate product list'
);
export const LOAD_PRODUCTS_SUCCESS = createAction(
    '[LOAD PRODUCTS] populate product list success',
    props<{ products: Product[] }>()
);
export const LOAD_PRODUCTS_FAILURE = createAction(
    '[POPULATE Effects] update city failure',
    props<{ err: any }>()
);

export const ADD_PRODUCT_TO_CART = createAction(
    '[ADD PRODUCT TO CART]',
    props<{product: CartProduct}>()
);
export const ADD_PRODUCT_TO_CART_SUCCESS = createAction(
    '[ADD PRODUCT TO CART SUCCESS]',
    props<{ products: CartProduct[] }>()
);
export const ADD_PRODUCT_TO_CART_FAILURE = createAction(
    '[ADD PRODUCT TO CART FAILURE]',
    props<{ err: any }>()
);

export const ADD_CATEGORY = createAction(
    '[LOAD CATEGORY] Add category'
);
export const ADD_CATEGORY_SUCCESS = createAction(
    '[LOAD CATEGORY] populate product list success',
    props<{ categories: Category[] }>()
);
export const ADD_CATEGORY_FAILURE = createAction(
    '[LOAD CATEGORY FAIL] update city failure',
    props<{ err: any }>()
);



export const GET_CART = createAction(
    '[GET] populate product list',
    props<{userId: string}>()
);
export const GET_CART_SUCCESS = createAction(
    '[GET] populate product list success',
    props<{ cart: any }>()
);
export const GET_CART_FAILURE = createAction(
    '[GET CART] update city failure',
    props<{ err: any }>()
);

export const UPDATE_CART = createAction(
    '[GET] populate product list',
    props<{cart: any}>()
);
export const UPDATE_CART_SUCCESS = createAction(
    '[GET] populate product list success',
    props<{ cart: any }>()
);
export const UPDATE_CART_FAILURE = createAction(
    '[GET CART] update city failure',
    props<{ err: any }>()
);


export class UpdateCart implements Action {
    readonly type = CartActionTypes.UPDATE_PRODUCT;
    constructor(public payload: any) { }
}
export class UpdateCartSuccess implements Action {
    readonly type = CartActionTypes.UPDATE_PRODUCT_SUCCESS;
    constructor(public payload: any) { }
}
export class UpdateCartFailure implements Action {
    readonly type = CartActionTypes.UPDATE_PRODUCT_FAILURE;
    constructor(public payload: Error) { }
}

export class DeleteProduct implements Action {
    readonly type = CartActionTypes.DELETE_PRODUCT;
}
export class DeleteProductSuccess implements Action {
    readonly type = CartActionTypes.DELETE_PRODUCT_SUCCESS;
    constructor(public payload: Product[]) { }
}
export class DeleteProductFailure implements Action {
    readonly type = CartActionTypes.DELETE_PRODUCT_FAILURE;
    constructor(public payload: Error) { }
}

export class ClearCart implements Action {
    readonly type = CartActionTypes.CLEAR_CART;
}
export class ClearCartSuccess implements Action {
    readonly type = CartActionTypes.CLEAR_CART_SUCCESS;
}
export class ClearCartFailure implements Action {
    readonly type = CartActionTypes.CLEAR_CART_FAILURE;
}



export type CartActions = UpdateCart | UpdateCartFailure | UpdateCartSuccess |
    DeleteProduct | DeleteProductSuccess | DeleteProductSuccess |
    ClearCart | ClearCartFailure | ClearCartSuccess;

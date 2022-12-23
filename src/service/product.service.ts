import axios from "axios";

import {IProduct} from "../models";

export async function ProductsService() {
    return axios.get<IProduct>('https://fakestoreapi.com/products');
}

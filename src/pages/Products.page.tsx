import React, {useContext} from "react";

import {useProducts} from "../hooks/product";
import {ModalContext} from "../context/modal.context";
import {IProduct} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Product} from "../components/Product";
import {Modal} from "../components/Modal";
import {CreateProduct} from "../components/CreateProduct";

export function ProductsPage() {
    const {products, error, loading, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close();
        addProduct(product);
    }

    return (
        <div className='component mx-auto max-w-2xl pt-5'>
            {
                loading &&
                <Loader/>
            }
            {
                error &&
                <ErrorMessage error={error}/>
            }
            {
                products.map(prod => <Product product={prod} key={prod.id} />)
            }

            {modal &&
                <Modal title='Create new product' onClose={() => close()}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>
            }

            <button className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
                    onClick={() => open()}>+</button>
            <button className='fixed bottom-5 left-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
                    onClick={() => close()}>-</button>
        </div>
    )
}
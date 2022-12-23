import React from "react";

export interface IProduct {
    id?: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

export interface ProductProps {
    product: IProduct
}

export interface ErrorMessageInterface {
    error: string
}

export interface ModalProps {
    children: React.ReactNode,
    title: string,
    onClose: () => void
}

export interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export interface IModalContext {
    modal: boolean,
    open: () => void,
    close: () => void
}
'use client'
import { OrderItem } from "../../../../lib/models/OrderModel"
import useCartService from "../../../../lib/hooks/useCartStore"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


import React from 'react'

export default function AddtoCart({ item }: { item: OrderItem }) {
    const router = useRouter();
    const { items, increase, decrease } = useCartService();
    const existItem = items.find((x) => x.slug === item.slug);

    const addToCartHandler = () => {
        increase(item);
    }

    const removeToCartHandler = () => {
        decrease(item)
    }

    return (
        <div>
            {existItem && (
                <>
                    <button className="btn border-none" type="button" onClick={() => decrease(existItem)}>
                        -
                    </button>
                    <span className=" px-2">{existItem.qty}</span>
                    <button className="btn  border-none" type="button" onClick={() => increase(existItem)}>
                        +
                    </button>
                </>
            )}
            {!existItem && (
                <button className="btn  bg-blue-500 w-full border-none hover:bg-blue-800" onClick={addToCartHandler}>
                    Add to the Cart
                </button>
            )}
        </div>
    );
}

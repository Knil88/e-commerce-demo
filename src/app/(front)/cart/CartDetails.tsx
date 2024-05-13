'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useCartService from '../../../../lib/hooks/useCartStore'
import Link from 'next/link'
import Image from 'next/image'


export default function CartDetails() {
    const router = useRouter()
    const { items, itemsPrice, decrease, increase } = useCartService()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted)
        return <></>

    return (<>
        <h1 className='py-4 text-2xl '>
            Shopping Cart
        </h1>

        {items.length === 0 ? (
            <div>
                Cart is Empty <Link href={'/'}>Go to Shopping</Link>
            </div>
        ) : (
            <div className='grid md:grid-cols-4 md:gap-5'>
                <div className=' overflow-x-auto md:col-span-3'>
                    <table className="table">
                        {/* head */}
                        <thead className=' bg-slate-400'>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.slug}>
                                    <td>
                                        <Link
                                            href={`/products/${item.slug}`}
                                            className='flex items-center'
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={50}
                                                height={50} />
                                            <span className='px-2'>{item.name} </span>
                                        </Link>
                                    </td>
                                    <td className='flex items-center'>
                                        <button
                                            type='button'
                                            className='btn border-none'
                                            onClick={() => decrease(item)}
                                        >
                                            -
                                        </button>
                                        <span className='px-2'>{item.qty}</span>
                                        <button
                                            type='button'
                                            className='btn border-none'
                                            onClick={() => increase(item)}
                                        >
                                            +
                                        </button>
                                    </td>
                                    <td>
                                        {item.qty}
                                    </td>
                                    <td>
                                        €{item.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className=' card bg-base-300'>
                    <div className='card-body'>
                        <ul className='list-none'>
                            <li>
                                <div className='pb-3  text-2xl'>
                                    Subtotal ({items.reduce((a, c) => a + c.qty, 0)}) : €
                                    {itemsPrice}
                                </div>
                            </li>
                            <li>
                                <button
                                    className='btn bg-blue-400 hover:bg-blue-700 w-full'
                                    type='button'
                                    onClick={() => router.push('/shipping')}
                                >
                                    Go to Checkout
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )

        }
    </>)

}

import React from 'react'
import { Product } from '../../../../lib/models/ProductModel'
import Link from 'next/link'
import Image from 'next/image'

const ProducItems = ({ product }: { product: Product }) => {
    return (
        <div className='card shadow-md shadow-cyan-400  mb-4 bg-base-300 '>
            <figure>
                <Link href={`/products/${product.slug}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200} className='w-full h-64 object-cover'>
                    </Image>
                </Link>
            </figure>
            <div className=' card-body'>
                <Link href={`/products/${product.slug}`}>
                    <h2 className='card-title font-normal'>
                        {product.name}
                    </h2>
                </Link>
                <p className=' mb-2'>{product.brand}</p>
            </div>
            <div className=' card-actions flex items-center justify-between'>
                <span className=' p-3 text-2xl'>€{product.price}</span>
            </div>

        </div>
    )
}

export default ProducItems

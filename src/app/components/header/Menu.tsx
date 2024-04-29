'use client'
import useCartService from "../../../../lib/hooks/useCartStore"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { FaCartShopping } from "react-icons/fa6";


import React from 'react'

const Menu = () => {

    const { items } = useCartService()
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <>
            <div>
                <ul className=" list-none flex items-stretch">
                    <li>
                        <Link className="btn btn-ghost rounded-btn " href={'/cart'}>
                            <FaCartShopping className=" text-xl text-blue-300" />


                            {mounted && items.length !== 0 && (
                                <div className=" badge bg-blue-400 rounded-full text-center p-2">
                                    {items.reduce((a, c) => a + c.qty, 0)}{''}
                                </div>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link href={'/signin'} className='btn btn-ghost rounded-btn'>
                            Signin
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Menu

import Link from 'next/link'
import React from 'react'

const header = () => {
    return (
        <header>
            <nav>
                <div className='navbar justify-between bg-base-300'>
                    <Link href={'/'} className=' btn btn-ghost text-lg'> E-commmerce Demo</Link>
                    <ul className='list-none'>
                        <li>
                            <Link href={'/cart'} className='btn btn-ghost rounded-btn'>Cart</Link>
                        </li>
                        <li>
                            <Link href={'/signin'} className='btn btn-ghost rounded-btn'>Signin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default header

'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    return (
        <>
            <div className="flex justify-between mx-10 my-10">
                <Link href='/' className="logo mt-[-3%]">
                    <Image src='/logo.png' width={140} height={140} alt="logo" className=''/>
                </Link>
                <div className="flex">
                    <ul>
                        <Link href='/' className='px-4 mx-5 rounded-lg border-solid border border-blue-200 py-1 hover:bg-blue-600 '>Home</Link>
                        <Link href='/Explore' className='px-4 rounded-lg border-solid border border-blue-200 py-1 hover:bg-blue-600 '>Explore</Link>
                    </ul>
                </div>
            </div>

            {/* <hr className='bg-gray-700 w-[100%] h-[1px]'/> */}

        </>
    )
}

export default Navbar

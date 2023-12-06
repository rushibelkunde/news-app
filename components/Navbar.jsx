"use client"
import React from 'react'
import Link from 'next/link'
import { auth, useAuthContext } from '@/configs/AuthContext'

import { signOut } from 'firebase/auth'

const Navbar = () => {

    const { user } = useAuthContext()



    return (
        <div className='w-full h-28 bg-black flex justify-around items-center text-white font-semibold'>

            <Link href={'/'}> <span className=' font-extrabold text-4xl'>NEWS</span></Link>

            {user?  
            <Link href={'/fav-articles'}> Fav-Articles</Link>
            : 
            <Link href={'/register'}>Register</Link>}

            {user ?
                <button onClick={async () => await signOut(auth)}>
                    Signout
                </button>
                :
                <Link href={'/login'}>Login</Link>}
        </div>
    )
}

export default Navbar
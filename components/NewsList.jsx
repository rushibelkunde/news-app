"use client"
import React from 'react'
import Article from './Article'
import { useAuthContext } from '@/configs/AuthContext'

const NewsList = ({ news }) => {

    const { user } = useAuthContext()
    return (

        <> {user ? <h1 className=' font-bold text-4xl ml-10 mt-10'>Top News</h1> : ""}
            {user ?
                <main className="flex flex-wrap">
                    {news?.map((article, i) => (
                        <Article article={article} />
                    ))}
                </main>
                :
                <h1 className='font-bold text-4xl mt-20 text-center'>Login to see NEWS</h1>}
        </>
    )
}

export default NewsList
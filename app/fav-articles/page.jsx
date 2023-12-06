"use client"
import React from 'react'

import Article from '@/components/Article'

const page = () => {

    const favArticles = localStorage.getItem('fav-articles')? JSON.parse(localStorage.getItem('fav-articles')): []



  return (
    <div>
        {favArticles?.map((article)=>(
            <Article article={article} inFav={true}/>
        ))}
    </div>
  )
}

export default page
'use client'

import React from 'react';

import { useRouter } from 'next/navigation';

const Article = ({ article, inFav }) => {

  const router = useRouter()
    const addToFav = ()=>{
        const favArticles= localStorage.getItem("fav-articles")? JSON.parse(localStorage.getItem("fav-articles")) : []
        favArticles.push(article)
        localStorage.setItem("fav-articles", JSON.stringify(favArticles))
        alert("article added to favourites")
    }

    const removeFromFav =()=>{
      const favArticles= localStorage.getItem("fav-articles")? JSON.parse(localStorage.getItem("fav-articles")) : []
      const i = favArticles.findIndex((a)=> a.title === article.title)
      if(i!==-1){
        favArticles.splice(i,1)
        localStorage.setItem("fav-articles", JSON.stringify(favArticles))
        router.refresh()
      }
    }
  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-md rounded-md overflow-hidden">
      <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover object-center" />

      <div className="p-6">
        <p className="text-sm text-gray-500">{article.publishedAt}</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">{article.title}</h2>
        <p className="text-gray-600 mt-2">{article.description}</p>
        <p className="text-gray-700 mt-4">{article.content}</p>
        <p className="text-blue-500 mt-4">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </p>
      </div>

      <div className="bg-gray-200 p-4 flex justify-around">
        <p className="text-gray-800 font-semibold">Author: {article.author}</p>
        {inFav? <button onClick={removeFromFav}  className='bg-black text-white p-2 rounded-xl'>remove from fav</button>:
        <button onClick={addToFav}  className='bg-black text-white p-2 rounded-xl'>add to fav</button>
  }
      </div>
    </div>
  );
};

export default Article;

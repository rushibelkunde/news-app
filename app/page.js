import Image from 'next/image'

import { getHeadlines } from '@/actions/actions'

import Article from '@/components/Article'

const Home = async ()=> {

  const news = await getHeadlines()
  return (
    <>
    <h1 className=' font-bold text-4xl ml-10 mt-10'>Top News</h1>
    <main className="flex flex-wrap">
      {news.map((article,i)=>(
        <Article article = {article}/>
      ))}
    </main>
    </>
  )
}

export default Home;

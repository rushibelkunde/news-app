import Image from 'next/image'

import { getHeadlines } from '@/actions/actions'

import NewsList from '@/components/NewsList'


const Home = async ()=> {
  
  const news = await getHeadlines()
  return (
    <>
    <NewsList news={news}/>
    </>
  )
}

export default Home;

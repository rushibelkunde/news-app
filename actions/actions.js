import next from "next"


export const getHeadlines = async()=>{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    {next:{revalidate:120}}
    )
    const data = await response.json()
    return data.articles
}
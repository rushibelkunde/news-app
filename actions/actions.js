import next from "next"

import { auth } from "@/configs/AuthContext"
import { onAuthStateChanged } from "firebase/auth"

export const getHeadlines = async()=>{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
    {next:{revalidate:120}}
    )
    const data = await response.json()
    return data.articles
}

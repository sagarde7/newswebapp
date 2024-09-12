import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';
import "./Newsbar.css"

function Newsbar(props) {

    const [articles,setArticles]=useState([]);
    useEffect(() => {
      let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      fetch(url).then(response=> response.json()).then(data=>setArticles(data.articles))
    },[props.category])
    
  return (
    <>
      <h2 className='heading'>Latest <span>News</span></h2>
    {articles.map((news,index)=>{
        return <Newsitem key={index} title={news.title} desc={news.description} src={news.urlToImage} url={news.url}></Newsitem>
    })}
    </>
  )
}

export default Newsbar

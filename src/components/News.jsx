import React from 'react'
import NewsItem from './NewsItem'
import { useState,useRef } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner'
import LoadingBar from "react-top-loading-bar"; 
const News = ({category}) => {
const API_KEY="d01e1ae5d1964eb181cf111e97e3689e"
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
   const loadingBarRef=useRef(null)
 

    useEffect(() => {

   const fetchnews=async()=>{
    loadingBarRef.current.continuousStart()
    setLoading(true)
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&category=${category}`)
    const data = await response.json()
    console.log(data)
    setLoading(false)
    if(data.articles){
      setArticles(data.articles)
    }
   
      loadingBarRef.current.complete(); // Complete the loading bar
 
   }
    fetchnews()
    }, [])
    
  return (
    <div className='container mt-3'>
          <LoadingBar color="#f11946" ref={loadingBarRef} shadow={true} />
      <h2 className='text-center mb-3'>My News -Top Headlines</h2>
      {loading && <Spinner/>}
      <div className="row">
       
    { articles.map((element)=>{
      return  <div className='col-md-4 mt-5' key={element.url}>
         <NewsItem title={element.title?element.title:"Content not found"} description={element.description?element.description:"Content not available"} urltoImage={element.urlToImage}   url={element.url}></NewsItem> 
      </div>
    })
  
    }
        </div>
       
      </div>
    
  )
}

export default News

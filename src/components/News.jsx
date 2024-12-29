import React from 'react'
import NewsItem from './NewsItem'
import { useState,useRef } from 'react'
import { useEffect } from 'react'
import Spinner from './Spinner'
import LoadingBar from "react-top-loading-bar"; 
import axios from 'axios';
import { useParams } from 'react-router-dom';
const News = ({mode}) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const { category } = useParams(); 

   const loadingBarRef=useRef(null)
 

    useEffect(() => {

   const fetchnews=async()=>{
    const API_KEY = 'd01e1ae5d1964eb181cf111e97e3689e';
    loadingBarRef.current.continuousStart()
    setLoading(true)
    try {
      const response = await axios.get('https://news-back-5klw.onrender.com/api/news', {
        params: {
          country: 'us',
          category: category, // Pass the selected category here
          apiKey: API_KEY,
        },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setLoading(false)
    

      loadingBarRef.current.complete(); // Complete the loading bar
 
   }
    fetchnews()
    }, [category])
    
  return (
    <div className='container mt-3'>
          <LoadingBar color="#f11946" ref={loadingBarRef} shadow={true} />
      <h2 id="head"  className={`text-center  mb-3`}>My News -Top Headlines</h2>
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

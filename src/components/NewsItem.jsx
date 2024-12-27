import React from 'react'
import img from '../news.jpg'


const NewsItem = ({title,description,urltoImage,url}) => {

 
  return (
    <div>
      <div className="card" >
  <img src={urltoImage||img} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-sm btn-dark">Read more</a>
  
  </div>
</div>
    </div>
  )
}

export default NewsItem

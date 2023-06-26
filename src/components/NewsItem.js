import React from 'react'

const NewsItem = (props) => {
    const {title, author, description, source, date, imageurl, newsurl}=props
  return (
<>   


<div className='my-3'>  
<div className="card" >

  <img src={imageurl===null?"https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} className="btn btn-primary">Go somewhere</a>
<p>by {!author?" ":author} on {date} </p>
  </div>
</div>
</div>
</>)
}

export default NewsItem
{/* //     <div className='my-3'>
//     <div className="card" style={{width: "18rem;"}}>
//       <div style={{
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    right: "0"} }>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl} className="btn btn-primary">Go somewhere</a>
    <p>by {author} on {date}</p>
  </div>
  </div>
</div>
    </div> */}
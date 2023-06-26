import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';


const News = (props) => {
 const [articles, setArticles] = useState([]);
    const[page, setPage]=useState(1);
    const [totalResults, setTotalResults] = useState([])
    const[  loading, setLoading]=useState(false);
    
    
    const capitalizfirstletter=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1)
}


    const Updatenews = async () => {
        const URL = (`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`)
        setLoading(true)
        let Data = await fetch(URL)
        let parsedata = await Data.json()
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
       

        setLoading(false)

    }

    useEffect(() => {
        Updatenews()
    }, [])


    
   
    const NextData = async () => {
  
        const URL = (`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`)
        setLoading(true)
        let Data = await fetch(URL)
        let parsedata = await Data.json()
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
       setPage(page+1)

        setLoading(false)

      }


    const PrevData=async()=>{
      
        const URL = (`https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apikey}&category=${props.category}&page=${page-1}&pageSize=${props.pageSize}`)
        setLoading(true)
        let Data = await fetch(URL)
        let parsedata = await Data.json()
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
       setPage(page-1)

        setLoading(false)

    }

   
 

    return (<>
   
            <h1 className='text-center ' style={{margin : "35px 0px ", marginTop:"90px" }}> Top Headlines of {capitalizfirstletter(props.category)} news - NewsInstant</h1>
          {  loading && <Spinner/>}
            
        <div className="container">
       
 
            <div className='row'>
                {articles.map((value) => {
                    return <div className='col-md-4' key={value.url}>
                        <NewsItem title={value.title} author={value.author} description={value.description} source={value.source} date={value.publishedAt} imageurl={value.urlToImage} newsurl={value.url} />

                    </div>
                }
                )}


            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" disabled={page <= 1} onClick={PrevData} className="btn btn-info">&#8592;</button>

          <div>

            <b> pages</b> : <span>{page}</span>/<span>{Math.ceil(totalResults / props.pageSize)}</span>
            
          </div>
          <button type="button"  onClick={NextData} disabled={page >= Math.ceil(totalResults/props.pageSize)} className="btn btn-info">&#8594;</button>



        </div>
            </div>
        
      

    </>
    )
}

export default News

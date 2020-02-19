import React,{useEffect, useState} from 'react';
//useEffect hook for state management, useState for state 
import {useParams} from "react-router-dom";

import Data from "../components/Data.js";



function Article() {
  const [article,setArticle] = useState({});
  let {id} = useParams();

  //useEffect gets a callback function and an update array
  useEffect(() =>{
    let dataArray = Data.filter((article) => article.id == id);
    setArticle(dataArray[0]);
  }, [id]) //use id to determine the update

  console.log(article);
  console.log(article.publishedDate);
  let d = article && article.publishedDate;
  console.log("d is" + d);
  console.log(Date.parse(article.publishedDate));
  console.log(article.articleText);

  return (
    <div className="Article">

      <header 
        className="articleHeader"
        style={{
          // this will make it not break b/c of depth issues
          //backgroundImage:`url(${article.image && article.image.url})`
        }}
      >
        <div className="articleHeaderWrapper">
          <h1>{article.title}</h1>
          <p>{article.publishedDate && new Intl.DateTimeFormat('en-US', 
                      {
                          weekday: "long",
                          month: "long",
                          day: "2-digit",
                          year: "numeric"
                      }
                  ).format(new Date(article.publishedDate))}</p>
          <p class="articleBlurb">{article.blurb}</p> 
        </div>
      </header>
      <main className="articleContent">
        <div className="articleContentWrapper">
          {article.articleText && article.articleText.map((text,i) => (
            <text.type key={i}>{text.data}</text.type> 
          ))}
        </div>
      </main>
    </div>
  );
}

export default Article;

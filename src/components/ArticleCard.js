import React from 'react';



function ArticleCard({article}){
    console.log("Article", article);

    return(
        <article className="articleCard">
            <div className="articleImage">
                <img src={article.image.url} alt={article.image.alt}/> 
            </div>
            <div className="articleDesc">
                <h2>{article.title}</h2>
                <p>{new Intl.DateTimeFormat('en-US', 
                    {
                        weekday: "long",
                        month: "long",
                        day: "2-digit",
                        year: "numeric"
                      }
                ).format(new Date(article.publishedDate))}</p>
                <p>{article.blurb}</p>
                <a href={`article/${article.id}`}>Read More</a>
            </div>
            
        </article>
    )
}

export default ArticleCard;

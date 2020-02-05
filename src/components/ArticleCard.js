import React from 'react';
import '../styles/ArticleCard.css';


function ArticleCard({article}){
    console.log("Article", article);
    console.log("Image", article.image);
    return(
        <article>
            <div class="articleImg">
                {article.image.map((img, i) => (
                    <img src="{img.url}"/>
                ))}
                <img src="{article.image.url}" alt="{article.image.alt}"/> 
            </div>
            <div class="articleDesc">
                <h2>{article.title}</h2>
                <p>{article.publishedDate}</p>
                <p>{article.blurb}</p>
                <a href="">Read More</a>
            </div>
            
        </article>
    )
}

export default ArticleCard;

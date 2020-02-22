import React from 'react';

// fuction ArticleItem({data, type}){
//     return <div>
//         <type>{data}</type>
//     </div>
// }

function ArticleItem({data, type}){
    switch(type){
        case "p":
            return <p>{data}</p>
        case "h2":
            return <h2>{data}</h2>
        default:
            return <p>{data}</p>
    }
}

export default ArticleItem;
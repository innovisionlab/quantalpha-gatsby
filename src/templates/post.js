import React from "react"
import ReactHtmlParser from 'react-html-parser'; 
import "../styles/index.css"
import "../styles/common.min.css"
import "../styles/frontend-elementor-pro.min.css"
import "../styles/frontend.min.css"
import "../styles/v4-shims.min.css"
import "../styles/vegas.min.css"



const postTemplate = (data) => {
    
    //console.log(data.pageContext.sitestyles);
    
    
    return (<div id="content" className="site-content">
        <div className="ast-container">
        <div id="primary" className="content-area primary">
        <main id="main" className="site-main">
        <article className="post-{data.pageContext.id} page type-page status-publish ast-article-single">
        <div className="entry-content clear" id="post-{data.pageContext.id}">
        {ReactHtmlParser("<style>"+data.pageContext.elementorCss+"</style>")}
        {ReactHtmlParser(data.pageContext.content)}
    </div>
    </article>
    </main>
    </div>
    </div>
    </div>)
}


export default postTemplate
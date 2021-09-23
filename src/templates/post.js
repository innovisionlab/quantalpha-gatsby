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
    
    return (<div className="elementor-page">
        {ReactHtmlParser("<style>"+data.pageContext.elementorCss+"</style>")}
        {ReactHtmlParser(data.pageContext.content)}
    </div>)
}


export default postTemplate
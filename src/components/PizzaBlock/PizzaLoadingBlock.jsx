import React from 'react'
import ContentLoader from "react-content-loader"
function PizzaLoadingBlock() {
    return (
        <ContentLoader 
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            
          >
            <circle cx="112" cy="112" r="112" /> 
            <circle cx="33" cy="325" r="13" /> 
            <rect x="1" y="248" rx="3" ry="3" width="233" height="26" /> 
            <rect x="1" y="283" rx="3" ry="3" width="231" height="84" /> 
            <rect x="75" y="327" rx="0" ry="0" width="12" height="0" /> 
            <rect x="-4" y="376" rx="7" ry="7" width="83" height="33" /> 
            <rect x="99" y="376" rx="20" ry="20" width="134" height="33" />
          </ContentLoader>
    )
}

export default PizzaLoadingBlock

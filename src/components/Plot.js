import React from 'react'
import Iframe from 'react-iframe';


const Plot = (props) => {
    return (
        <div className="plot-wrapper">
            <Iframe width="100%" height="350" frameBorder="0" url={props.url}></Iframe>
        </div>
    )
}

export default Plot
import React from 'react'
import Iframe from 'react-iframe';


const Plot = (props) => {
    return (
        <div className="plot-wrapper2">
            <Iframe height="350" frameBorder="0" url={props.url}></Iframe>
        </div>
    )
}

export default Plot
import React, { Component } from 'react'
import "../css/index.css"

class Description extends Component {
    render () {
        return (
            <div className="descr-wrapper">
                <div className="descr-video-wrapper">
                    <video className="descr-video" controls>
                        <source src="../images/video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="descr-texto">
                    <p>Esta es la descripcion</p>
                </div>
            </div>
        )
    }
}

export default Description
import React, { Component } from 'react';
import "../css/index.css";
import video from "../images/diet.mp4";

class Description extends Component {
    render () {
        return (
            <div className="descr-wrapper">
                <div className="descr-video-wrapper">
                    <video className="descr-video" controls preload="metadata">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="descr-texto">
                    <div>
                        <h1 className="title-section">¿Quienes somos?</h1>
                    </div>
                    <div>
                        <h2 className="subtitle-section">Somos tus aliados para que llegues a tu meta de cuerpo ideal.</h2>
                        <p>Te ayudamos a bajar de peso, tonificar tu cuerpo o mantener un estilo de vida saludable.</p>
                        <p>Consultas rapidas y te enviamos tu plan a travez de la app o whatsapp.</p>
                    </div>
                </div>
                <div className="descr-banner">
                    <h1 className="subtitle-section" >Nos Interesa tu Bienestar</h1>
                </div>
            </div>
        )
    }
}

export default Description
import React, { Component } from 'react';
import "../css/index.css";
import video from "../images/diet.mp4";


class Description extends Component {
    render () {
        return (
            <div className="descr-wrapper">
                <div className="descr-texto">
                    <div>
                        <h1 className="title-section">¿Sin tiempo?</h1>
                    </div>
                    <div>
                        <p>Que la oficina no te impida ser saludable. Juntos lograremos tus objetivos; bajar de peso, tonificar tu cuerpo o simplemente llevar una vida más saludable.</p>
                    </div>
                    <div className="boton-descripcion">
                    <button className="Agenda-Ahora" onClick={() => {}}> ¡Agenda ahora! </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Description
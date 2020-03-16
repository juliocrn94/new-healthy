import React from 'react';
import "../css/services.css";
import Nutriologo from "../images/iconServNutri.svg" 
import Movil from "../images/iconServMovil.svg" 
import Complement from "../images/iconServDieta.svg" 
import Seguimiento from "../images/iconServSegui.svg" 


const Services2 = () => {
    return (
            <section className="seccion-servicios">
                <div>
                    <h1>Servicios</h1>   
                </div>
                <div className="alineacion-servicios">
                    <div className="servicio">  
                        <img src={Nutriologo} alt="testimonio1"/>
                        <h3>Nutriólogo</h3>
                        <p>Profesionales en nutrición te atenderán donde quiera que estes. </p>
                    </div>
                    <div className="servicio">  
                        <img src={Movil} alt="testimonio1"/>
                        <h3>Movilidad</h3>
                        <p>Siempre cerca de ti en la unidad movil para optimizar tu tiempo</p>
                    </div>
                    <div className="servicio">  
                        <img src={Complement} alt="testimonio1"/>
                        <h3>Complementos</h3>
                        <p>Contamos con los suplementos y/o alimentos necesarios para tu plan personalizado</p>
                    </div>
                    <div className="servicio">  
                        <img src={Seguimiento} alt="testimonio1"/>
                        <h3>Seguimiento</h3>
                        <p>Iremos contigo de la mano para que puedas lograr tus metas</p>
                    </div>
                </div>
            </section>
    );
};

export default Services2;

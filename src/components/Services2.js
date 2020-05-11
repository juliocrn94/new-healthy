import React from 'react';
import "../css/services.css";
import Nutriologo from "../images/nutri2.jpg" 
import Movil from "../images/movil1.jpg" 
import Complement from "../images/comple1.jpg" 
import Seguimiento from "../images/segui1.jpg" 
import Logo from "../images/logoHB-01.png"


const Services2 = () => {
    return (
            <section className="seccion-servicios">
                <div className="encabezado-service">
                    <h1>Servicios</h1>
                    <img className="logo-service" src={Logo} alt="Healthy Break"/> 
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

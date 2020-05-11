import React from 'react';
import "../css/index.css";
import Exercise from "../images/exercise.jpeg" 
import Desayunook from"../images/desayunook.jpeg"
import Hacerdecomer from "../images/hacerdecomer.jpeg"



const Testimonios = () => {
    return (
        
        <div className="alineacion_testimonios">
            <div className="titulo-opinion">
              <h1>¡Casos de éxito!</h1>   
            </div>
            <section className="opinions">
                
                <div className="barratestimonios">
                    <div className="testimonio">  
                        <img className='imagenchicafit' src={Exercise} alt="testimonio1"/>
                        <h3>¡Recomendable 100% rutinas muy fáciles de llevar!</h3>
                    </div>

                    <div className="testimonio">
                        <img className='chicoquebajodepeso' src={Desayunook} alt="testimonio2"/>
                        <h3>¡Excelente servicio, me senti comoda en todo momento.</h3>
                    </div>

                    <div className="testimonio">
                        <img className='Hacerdecomer' src={Hacerdecomer} alt="testimonio3"/>
                        <h3>¡Muy buen trato y muy buen plan para controlar mi peso!</h3>
                    </div>
                </div>
        
            </section>
        </div>
    );
};

export default Testimonios;

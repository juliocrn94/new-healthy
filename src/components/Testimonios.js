import React from 'react';
import "../css/index.css";
import Exercise from "../images/exercise.jpeg" 
import Desayunook from"../images/desayunook.jpeg"
import Hacerdecomer from "../images/hacerdecomer.jpeg"



const Testimonios = () => {
    return (
        
        <div className="alineacion_testimonios">
        
            <section className="opinions">
                <div>
                    <h1>CASOS DE EXITO</h1>   
                </div>
                <div className="barratestimonios">
                    <div className="alineacion_testimonios">  
                     
                        <img className='imagenchicafit' src={Exercise} alt="testimonio1"/>
                        <h3>¡Recomendable 100% rutinas muy fáciles de llevar!</h3>
                        

                    </div>

                    <div className="alineacion_testimonios">
                        <img className='chicoquebajodepeso' src={Desayunook} alt="testimonio2"/>
                        <h3>¡Excelente servicio, me senti comoda en todo momento para mi plan de alimentación</h3>
                    </div>

                    <div className="alineacion_testimonios">
                        <img className='Hacerdecomer' src={Hacerdecomer} alt="testimonio3"/>
                        <h3>¡Me encantó, muy buen trato y muy buen plan para controlar mi peso!</h3>
                    </div>

                </div>
        
            </section>
        </div>
    );
};

export default Testimonios;

import React from 'react';
import "../css/index.css";
import chicafit from "../images/chicafit.jpg" 
import chicoquebajodepeso from"../images/chicoquebajodepeso.jpg"
import señorcondiabetes from "../images/señorcondiabetes.jpg"

const Testimonios = () => {
    return (
        
        <div className="alineacion_testimonios">
        
        <section className="opinions">
            <div>
                <h1>CASOS DE EXITO</h1>
            </div>
            <div className="testimony">
                <img className='imagenchicafit' src={chicafit} alt="testimonio1"/>
            
                <h3>¡Excelente servicio, me senti comoda en todo momento!</h3>
            </div>
            <div className="testimony">
            <img className='chicoquebajodepeso' src={chicoquebajodepeso} alt="testimonio2"/>
                
                <h3>¡Recomendable 100% rutinas muy fáciles de llevar!</h3>
            </div>
            <div className="testimony">
            <img className='señorcondiabetes' src={señorcondiabetes} alt="testimonio3"/>
                <h3>¡Me encantó, muy buen trato y muy buen plan para controlar mi diabetes!</h3>
            
            
            </div>
    
        </section>
        </div>
    );
};

export default Testimonios;

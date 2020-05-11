import React, { Component } from 'react'
import "../css/index.css"
import MapaPolanco from '../images/Polanco.PNG'
import MapaCondesa from '../images/Condesa.png'
import MapaSantafe from '../images/SantaFe.png'


class Map extends Component {
    constructor (props) {
        super(props)
        this.state= {
            ubicacion: 'p',
            mes: '',
            dia:'',
            mapa:''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e){

        this.setState({
            ubicacion: e.target.value
        })

    }


    render () {
        return (
            <div className ="Map-wrapper">
                <div className ="Map-imagen">
                    <figure id="mapa">

                        {this.state.ubicacion === "p" &&                         
                        <img src={MapaPolanco} alt="mapa"/>
                        }

                        {this.state.ubicacion === "s" &&                         
                        <img src={MapaSantafe} alt="mapa"/>
                        }

                        {this.state.ubicacion === "c" &&                         
                        <img src={MapaCondesa} alt="mapa"/>
                        }

                    </figure>
                        
                </div>
                    <div className ="Map-formulario">
                    <h1 className="titulo-mapa">Esta semana</h1>
                    <p className="loDeLaSemana">Nos encontraremos en 3 puntos de la CDMX <br></br> Reto de la semana:"Decir NO" <br></br>Nuevos suplementos orgánicos</p>
                        <div className ="Map-info">
                        <label>
                        Selecciona la ubicación de tu preferencia:
                        </label> 
                            <select value={this.state.ubicacion} onChange={this.onChange}>
                                <option value="p"> Polanco</option>
                                <option value="s"> Santa Fe</option>
                                <option value="c"> Condesa</option>
                            </select>
                            {
                            this.state.ubicacion ==="p" && 
                            <p> Dirección: presidente Masaryk #123 enfrente de XXX</p>
                            }
                            {
                            this.state.ubicacion ==="s" && 
                            <p> Dirección: enfrente de el parque La Mexicana #234 Torre 2</p>
                            }
                            {
                            this.state.ubicacion ==="c" && 
                            <p> Dirección: enfrente de Parque México</p>
                            }
                    </div>

                        <button className="Agenda-Ahora" onClick={() => {}}> ¡Agenda ahora! </button> 
                </div>
            </div>
        )
    }
}

export default Map


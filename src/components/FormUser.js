import React, { Component } from 'react';
import {withRouter} from 'react-router';
import bc1 from '../images/Asset 2.svg';
import bc2 from '../images/Asset 3.svg';
import bc3 from '../images/Asset 4.svg';
import MapaPolanco from '../images/Polanco.PNG';
import MapaCondesa from '../images/Condesa.png';
import MapaSantafe from '../images/SantaFe.png';



import ButtonForm from './ButtonForm';

import '../css/form.css';


class Formuser extends Component {

    constructor (props) {
        super(props)
        this.state = {
            nombre: '',
            telefono: '',
            correo: '',
            hopping: 'a',
            ubicacion: 'p',
            fecha: '',
            horario: '00:00',
            tarjetaNombre:'',
            tarjetaApellidos:'',
            tarjetaNum: '',
            tarjetaFecha: '',
            tarjetaCvv: '',
            display: 1
        }
        
        this.handleMetaChange = this.handleMetaChange.bind(this)
        this.handleUbiChange = this.handleUbiChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
        this.handleButtonAnterior = this.handleButtonAnterior.bind(this)
        this.handleButtonFinalizar = this.handleButtonFinalizar.bind(this)
    }
    
    
    handleMetaChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
          });
    }

    handleUbiChange(event) {
        this.setState({
            ubicacion: event.target.value
        })
    }
    
    handleButton(event) {
        this.setState({
            display: this.state.display + 1
            }
        )
        if (this.state.display >= 3 ) {
            this.setState({
                textBtn: 'Finalizar' 
            })
        } 
    }
    handleButtonAnterior(event) {
        this.setState({
            display: this.state.display - 1
            }
        )
    }


    handleButtonFinalizar(event) {
        this.setState({
            nombre: '',
            telefono: '',
            correo: '',
            hopping: 'a',
            ubicacion: 'p',
            horario: '00:00',
            tarjetaNombre:'',
            tarjetaApellidos:'',
            tarjetaNum: '',
            tarjetaFecha: '',
            tarjetaCvv: '',
            display: 1
        }
        );
       this.props.history.push("/")
    }

    
    render () {
        
        return (
            <div className="container">
                {/* form de info usuario*/}
                {this.state.display === 1 && 
                    <div className='form-wrapper'>
                        <h1 className="form-title">Agenda Tu Cita</h1>
                        
                        <h2 className="label">Nombre</h2>
                        <input type="text" name='nombre' onChange={this.handleMetaChange}></input>

                        <h2 className="label">Telefono</h2>
                        <input type="tel" name='telefono' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={this.handleMetaChange} ></input>
                        
                        <h2 className="label">Correo</h2>
                        <input type="text" name='correo' onChange={this.handleMetaChange}></input>
                    </div>
                }
                {/* form de info */}
                {this.state.display === 2 &&
                    <div className='form-wrapper'>
                        <h1 className="form-title">Dinos Tus Necesidades</h1>
                        <h2 className="label">¿Cual es tu Meta?</h2>
                        <div className="radio-wrapper">
                            <div className="button-radio-container">
                                <label for="a">
                                    <input id="a" className='button-radio' type="radio" name="hopping" value="a" checked={this.state.hopping=='a'} onChange={this.handleMetaChange} />
                                    <span class="checkmark"></span>
                                    Bajar de Peso
                                </label>
                            </div>

                            <div className="button-radio-container">
                                <label for="b">
                                <input id="b" className='button-radio' type="radio" name="hopping" value="b" checked={this.state.hopping=='b'} onChange={this.handleMetaChange}/>
                                <span class="checkmark"></span>
                                    Ganar Musculo
                                </label>
                            </div>
                        
                            <div className="button-radio-container">
                                <label for="c">
                                    <input id="c" className='button-radio' type="radio" name="hopping" value="c" checked={this.state.hopping=='c'} onChange={this.handleMetaChange}/>
                                    <span class="checkmark"></span>
                                    
                                    Mantenerme en Forma
                                
                                </label>
                            </div>
                        </div>
                        <h2 className="label">Ubicación</h2>
                        <div className="ubi-wrapper">
                            <div className= "Map-info">
                            <select value={this.state.value} onChange={this.handleUbiChange}>
                                <option value="p">Polanco</option>
                                <option value="s">Santa Fe</option>
                                <option value="c">Condesa</option>
                            </select>
                            </div>    
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
                        </div>
                    
                        <h2 className="label">Escoge un horario</h2>
                        <div className="hor-wrapper">
                            <input type="date" name='fecha' value="2020-01-01" min="2020-01-01" max="2022-12-31" onChange={this.handleMetaChange}></input>
                            <input type="time" name='horario' min="10:00" max="20:00" onChange={this.handleMetaChange}></input>
                            <p>Estamos disponibles desde las 10am hasta las 8pm</p>
                        </div>
                    </div>
                }
                {/* form de pago */}
                {this.state.display === 3 &&
                    <div className='form-wrapper'>
                        <h1 className="form-title">Ya Casi Terminamos</h1>
                        
                        <h2 className="label">Solo necesitamos un método de pago</h2>

                        <div className="nombre-tarj">
                            <h2 className="label">Nombre</h2>
                            <input className= "tarj-nom" type="text" name='tarjetaNombre' onChange={this.handleMetaChange}></input>
                            <h2 className="label">Apellidos</h2>
                            <input className= "tarj-nom" type="text" name='tarjetaApellidos' onChange={this.handleMetaChange}></input>
                        </div>
                        <div className="numero-tarj">
                            <h2 className="label">Número de tarjeta</h2>
                            <input type="text" name='tarjetaNum' placeholder="XXXX-XXXX-XXXX-XXXX"onChange={this.handleMetaChange}></input>
                        </div>
                        <div className="fecha-cvv">
                            <div>
                            <h2 className="label">Fecha de caducidad</h2>
                            <input type="month" name='tarjetaFecha' min="2020-01" max= "2025-12" onChange={this.handleMetaChange}></input>
                            </div>
                            <div>
                            <h2 className="label">CVV</h2>
                            <input type="password" name='tarjetaCvv' onChange={this.handleMetaChange}></input>
                            </div>                    
                        </div>
                    </div>
                }
                {this.state.display === 4 &&
                    <div className= "confirma-wrapper">
                        <h1 className="form-title">¡Listo!</h1>
                        <h2 className="label">Tu cita ha sido agendada</h2>
                        <h2 className="label">Te hemos enviado un correo de confirmación, por favor revisa tu bandeja de entrada.</h2>
                    </div>
                }
                {/*zona de botones*/}
                    <div className="formFooter">
                        {this.state.display >= 2 && this.state.display <4 &&
                        <ButtonForm aligner="boton-ant" onClick={this.handleButtonAnterior} text= "Anterior" />
                        }
                        {this.state.display === 1 && 
                        <ButtonForm aligner="boton-disabled" onClick={this.handleButtonAnterior} text= "Anterior" />
                        }
                        <div className="breadcrumbs">
                            {this.state.display === 1 &&
                            <img src={bc1} className="bcs" />
                            }
                            {this.state.display === 2 &&
                            <img src={bc2} className="bcs"/>
                            }
                            {this.state.display === 3 &&
                            <img src={bc3} className="bcs"/>
                            }
                            {this.state.display === 4 &&
                            <img src={bc3} className="bcs-finales"/>
                            }
                        </div>
                        {this.state.display >= 1 && this.state.display <4 &&
                        <ButtonForm aligner="boton-sig" onClick={this.handleButton} text= "Siguiente" />
                        }
                        {this.state.display === 4 &&
                        <ButtonForm aligner="boton-sig" onClick={this.handleButtonFinalizar} text="Finalizar" />
                        }
                    </div>
                
            </div>
        )
    }
}

export default Formuser

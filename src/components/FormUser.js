import React, { Component } from 'react'
import bc1 from '../images/Asset 2.svg'
import bc2 from '../images/Asset 3.svg'
import bc3 from '../images/Asset 4.svg'


import ButtonForm from './ButtonForm';

import '../css/form.css';


class Formuser extends Component {
    constructor (props) {
        super(props)
        this.state = {
            textBtn: 'Siguiente',
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

        this.handleMetaChange = this.handleMetaChange.bind(this)
        this.handleUbiChange = this.handleUbiChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
        this.handleButtonAnterior = this.handleButtonAnterior.bind(this)
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
        console.log("anterior")
    }

    
    render () {
        
        return (
            <div className="container">
                {this.state.display === 1 && 
                    <div className='form-wrapper'>
                    <h1 className="form-title">Agenda Tu Cita</h1>
                    
                    <h2 className="label">Nombre</h2>
                    <input type="text" name='nombre' onChange={this.handleMetaChange}></input>

                    <h2 className="label">Telefono</h2>
                    <input type="text" name='telefono' onChange={this.handleMetaChange}></input>
                    
                    <h2 className="label">Correo</h2>
                    <input type="text" name='correo' onChange={this.handleMetaChange}></input>
                    </div>
                }
                {this.state.display === 2 &&
                    <div className='form-wrapper'>
                        <h1 className="form-title">Dinos Tus Necesidades</h1>
                        <h2 className="label">¿Cual es tu Meta?</h2>

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
	
                        <h2 className="label">Ubicación</h2>
                    
                        <select value={this.state.value} onChange={this.handleUbiChange}>
                            <option value="p">Polanco</option>
                            <option value="s">Santa Fe</option>
                            <option value="c">Condesa</option>
                        </select>
                    
                        <h2 className="label">Horario</h2>
                        <input type="text"></input>
                </div>
                }
                {this.state.display === 3 &&
                    <div className='form-wrapper'>
                        <h1 className="form-title">Ya Casi Terminamos</h1>
                        
                        <h2 className="label">Solo necesitamos un método de pago</h2>

                        <div>
                        <h2 className="label">Nombre</h2>
                        <input type="text" name='tarjetaNombre' onChange={this.handleMetaChange}></input>
                        <h2 className="label">Apellidos</h2>
                        <input type="text" name='tarjetaApellidos' onChange={this.handleMetaChange}></input>
                        </div>

                        <h2 className="label">Número de tarjeta</h2>
                        <input type="text" name='tarjetaNum' onChange={this.handleMetaChange}></input>

                        <div>
                            <div>
                            <h2 className="label">Fecha de caducidad</h2>
                            <input type="text" name='tarjetaFecha' onChange={this.handleMetaChange}></input>
                            </div>
                            <div>
                            <h2 className="label">CVV</h2>
                            <input type="text" name='tarjetaCvv' onChange={this.handleMetaChange}></input>
                            </div>                    
                        </div>
                    </div>
                }
                {this.state.display === 4 &&
                    <div>
                        <h1 className="form-title">¡Listo!</h1>
                        <h2 className="label">Tu cita ha sido agendada</h2>
                        <h2 className="label">Te hemos enviado un correo de confirmación, por favor revisa tu bandeja de entrada.</h2>
                    </div>
                }
                
                    <div className="formFooter">
                        {this.state.display >= 2 && this.state.display <4 &&
                        <ButtonForm aligner="alileft" onClick={this.handleButtonAnterior} text= "Anterior" />
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
                        </div>
                        <div>
                        <ButtonForm aligner="aliright" onClick={this.handleButton} text={this.state.textBtn} />
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Formuser

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
            nombre: '',
            telefono: '',
            correo: '',
            hopping: 'a',
            ubicacion: 'p',
            horario: '00:00',
            display: 1
        }

        this.handleMetaChange = this.handleMetaChange.bind(this)
        this.handleUbiChange = this.handleUbiChange.bind(this)
        this.handleButton = this.handleButton.bind(this)
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
        if (this.state.display <3 ) {
        this.setState({
            display: this.state.display + 1
            }
        )}
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
                <div>
                    <div>
                        {this.state.display === 1 &&
                        <img src={bc1}></img>
                        }
                        {this.state.display === 2 &&
                        <img src={bc2}></img>
                        }
                        {this.state.display === 3 &&
                        <img src={bc3}></img>
                        }
                    </div>
                    <div>
                    </div>
                    <ButtonForm onClick={this.handleButton}/>
                </div>
            </div>
        )
    }
}

export default Formuser

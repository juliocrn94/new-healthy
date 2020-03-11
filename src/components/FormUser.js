import React, { Component } from 'react'

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
            horario: '00:00'
        }

        this.handleMetaChange = this.handleMetaChange.bind(this)
        this.handleUbiChange = this.handleUbiChange.bind(this)
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

    
    render () {
        
        return (
            <div className="container">
                <div className='form-wrapper'>
                    <h1 className="form-title">Agenda Tu Cita</h1>
                    
                    <h2 className="label">Nombre</h2>
                    <input type="text" name='nombre' onChange={this.handleMetaChange}></input>

                    <h2 className="label">Telefono</h2>
                    <input type="text" name='telefono' onChange={this.handleMetaChange}></input>
                    
                    <h2 className="label">Correo</h2>
                    <input type="text" name='correo' onChange={this.handleMetaChange}></input>
                </div>
                <div className='form-wrapper'>
                    <h1 className="form-title">Dinos Tus Necesidades</h1>
                    <h2 className="label">¿Cual es tu Meta?</h2>

                    <div className="button-radio-container">
                        <input id="a" className='button-radio' type="radio" name="hopping" value="a" checked={this.state.hopping=='a'} onChange={this.handleMetaChange} />
                        <span class="checkmark"></span>

                        <label for="a">Bajar de Peso</label>
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

                <ButtonForm/>
            </div>
        )
    }
}

export default Formuser

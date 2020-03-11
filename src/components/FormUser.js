import React, { Component } from 'react'

import ButtonForm from './ButtonForm';

import '../css/form.css';

class Formuser extends Component {
    render () {
        return (
            <div className="container">
                <div className='form-wrapper'>
                    <h1 className="form-title">Agenda Tu Cita</h1>
                    <h2 className="label">Nombre</h2>
                    <input type="text"></input>
                    <h2 className="label">Telefono</h2>
                    <input type="text"></input>
                    <h2 className="label">Correo</h2>
                    <input type="text"></input>
                </div>
                <ButtonForm/>
            </div>
        )
    }
}

export default Formuser

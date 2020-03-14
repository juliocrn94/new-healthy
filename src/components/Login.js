
import React, { Component } from 'react'
import { validate } from 'json-schema'
import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: '', 
            contrasena:'',  

        }

        this.confirmarcontrasena = this.confirmarcontrasena.bind(this)
        this.onChange = this.onChange.bind(this)
        this.save = this.save.bind(this)
        this.validate = this.validate.bind(this)

    }



    onChange(e){

        if(e.target.name === 'accept'){
        this.setState({
                [e.target.name]: e.target.checked
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        
    }

    save(e){

        if(!this.validate()){
            return;
        }
        this.setState({
            mensaje:'¡Listo! gracias por tu registro'
        })
    }

    validate(){
        if(this.state.accept != true){
            this.setState ({
                mensaje:'Favor de aceptar los TERMINOS Y CONDICIONES'
            })

            return false
        }
            return true
    }

    confirmarcontrasena(){
        const usuarioCorrecto = "Usuario"
        const contraseñaCorrecta = "1234"
        if (this.state.usuario === usuarioCorrecto && this.state.contrasena === contraseñaCorrecta) {
            console.log ("éxito!")
            this.props.usuarioCorrecto(true)
        }


    }
    render () {


        return (

            <div className="LoginContainer">
                <div className="LoginSmallContainer">
                    <div className ="Ladoizq" >
                        <h1> ¡Bienvenido!</h1>
                            {/* <label htmlFor="usuario"> Escribe tu usuario </label> */}
                                    <input 
                                    value={this.state.usuario}
                                    onChange={this.onChange}  
                                    name="usuario" id="usuario" type="text" placeholder="Usuario" />
                            {/* <label htmlFor="contrasena"> Escribe tu contraseña </label> */}
                                    <input 
                                    value={this.state.contrasena}
                                    onChange={this.onChange}  
                                    name="contrasena" id="contrasena" type="password" placeholder="Contraseña" />
                        <Link to="">
                            <button className="Botonlogin" onClick={() => {this.confirmarcontrasena()}}>Iniciar sesión</button>
                        </Link>
                    </div>
                    <div className ="Ladoder">
                        <h1> ¡Se parte de la familia Healthy-Break!</h1>
                        <label> Ingresa tus datos para crear tu perfil </label>
                        <Link to="">
                            <button className="Registrar" onClick={() => {}}>Registrate</button>
                        </Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
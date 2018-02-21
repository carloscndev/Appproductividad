import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SignIn extends Component
{
  render()
  {
    return(
        <div className="row">
          <div className="col s8 offset-s2">
            <h4 className="grey-text">Ingresar: </h4>
          </div>
          <div className="input-field col s8 offset-s2">
            <input id="email" type="email" className="validate"/>
            <label htmlFor="email">Correo</label>
          </div>
          <div className="input-field col s8 offset-s2">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="col s8 offset-s2">
          <button className="btn waves-effect waves-light" type="submit" name="action">Enviar
          </button>
          </div>
          <Link to="/signup">SignUp</Link>
        </div>
    )
  }
}

export default SignIn

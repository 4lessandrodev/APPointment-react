import React, { Component } from 'react';
import './style.css';


export default class Form extends Component{
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            
            <div className="form__login">
                <h4 className="title">Login</h4>
                <fieldset>
                    <form className="container">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" className="form-control" placeholder="mail@domain.com" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="*****" required/>
                        </div>
            
                        <input type="submit" value="Entrar" className="btn btn-login" />
                    </form>
                    <small><a href="https://google.com">Cadastrar</a></small>
                </fieldset>
            </div>
            
        )
    };
        
    }
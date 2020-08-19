import React, { Component } from 'react';
import axios from 'axios';

export default class Pacientes extends Component{
   constructor(){
        super();
        this.state = {
            paciente: 'Aun no tenemos seleccion'
        };
    };

    componentDidMount = () => {
        axios.get("/pacientes").then(response => {
            this.setState({
                paciente: response.data
            })
        })
    };

    render() {
        return(
            <div>
                <button>Pacientes</button>
                <h1>Los pacientes de covid en Colombia son: {this.state.paciente}</h1>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Button from './Button';


class DashoardPlot extends Component {
    render () {
        return (
            <div>
                <div className='plot-select'>
                    <Button posicion='plot-button plot-pos-1' value='Peso' text="Peso"/>
                    <Button posicion='plot-button plot-pos-2' value='Peso' text="Contornos"/>
                    <Button posicion='plot-button plot-pos-3' value='Peso' text="Grasa"/>
                </div>

                <div className="plot-wrapper">
                    <Iframe width="100%" height="400" frameBorder="0" url="//plot.ly/~juliocrn94/1.embed"></Iframe>
                </div>
            </div>
        )
    }
}

export default DashoardPlot
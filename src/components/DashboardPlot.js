import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Button from './Button';
import Plot from './Plot';


class DashoardPlot extends Component {

    constructor (props) {
        super(props)
        this.state = {
            sel_plot: 'Peso',
        }

        this.handleButton = this.handleButton.bind(this)
    }

    handleButton(event) {
        this.setState({
            sel_plot: event.target.value
          });
    }

    render () {
        return (
            <div className={this.props.class}>
                <div className='plot-select'>
                    <Button posicion='plot-button plot-pos-1' value='Peso' text="Peso" onClick={this.handleButton} />
                    <Button posicion='plot-button plot-pos-2' value='Contornos' text="Contornos" onClick={this.handleButton}/>
                    <Button posicion='plot-button plot-pos-3' value='Grasa' text="Grasa" onClick={this.handleButton}/>
                </div>
                {this.state.sel_plot === 'Peso' && <Plot url='//plot.ly/~juliocrn94/1.embed' />}
                {this.state.sel_plot === 'Contornos' && <Plot url='//plot.ly/~juliocrn94/3.embed' />}
                {this.state.sel_plot === 'Grasa' && <Plot url='//plot.ly/~juliocrn94/5.embed' />}

            </div>
        )
    }
}

export default DashoardPlot
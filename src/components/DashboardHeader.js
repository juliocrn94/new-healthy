import React, { Component } from 'react'

import '../css/dashboard.css';
import prof_pic from '../images/user_test.png';

class DashboardHeader extends Component {
    render () {
        return (
            <div className="container">
                <div className='dash-header'>
                    <div className='dash-pic-wrapper'>
                        <img className='dash-pic' src={prof_pic} />
                    </div>
                    <div className='dash-nombre-wrapper'>
                        <h1 className='dash-nombre'>Mario Benito de Bross</h1>
                        <p className='dash-info'>Tel: xx xx xxx xxx </p>
                    </div>
                    <div className='dash-data-wrapper'>
                        <div className="dash-data-wrapper2">
                            <div className='dash-data edad'>
                                <p>Edad:</p>
                                <p>25</p>
                            </div>
                            <div className='dash-data meta'>
                                <p>Meta: </p>
                                <p>M</p>
                            </div>
                            <div className='dash-data peso'>
                                <p>Peso: </p>
                                <p>65 kg</p>
                            </div>
                            <div className='dash-data estatura'>
                                <p>Estra: </p>
                                <p>1.70 m</p>
                            </div>
                            <div className='dash-data progreso'>
                                <div className='prog-container'>
                                    <p >70%</p>
                                </div>
                                <p>A Meta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardHeader
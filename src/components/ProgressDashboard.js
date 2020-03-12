import React, { Component } from 'react'
import '../css/dashboard.css';

import prof_pic from '../images/user_test.png';

class ProgressDashboard extends Component {
    render () {
        return (
            <div className="container">
                <div className='dash-header'>
                    <div className='dash-pic-wrapper'>
                        <img className='dash-pic' src={prof_pic} />
                    </div>
                    <div className='dash-nombre-wrapper'>
                        <h1 className='dash-nombre'>Julio Cesar Renteria Navarro</h1>
                        <p className='dash-info'>Tel: 55 4444 4444</p>
                    </div>
                    <div className='dash-data-wrapper'>
                        <h2>data data data</h2>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default ProgressDashboard
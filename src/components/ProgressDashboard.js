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
                        <h1 className='dash-nombre'>Mario Benito de Bross</h1>
                        <p className='dash-info'>Tel: xx xx xxx xxx </p>
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
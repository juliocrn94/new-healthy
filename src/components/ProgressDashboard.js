import React, { Component } from 'react'
import '../css/dashboard.css';

import DashboardHeader from './DashboardHeader';
import DashoardPlot from './DashboardPlot';

class ProgressDashboard extends Component {
    render () {
        return (
            <div className="container">
                <DashboardHeader />
                <DashoardPlot />
            </div>
        )
    }
}

export default ProgressDashboard
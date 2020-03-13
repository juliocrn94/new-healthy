import React, { Component } from 'react'
import '../css/dashboard.css';

import DashboardHeader from './DashboardHeader';
import DashboardPlot from './DashboardPlot';
import DashboardPlan from './DashboardPlan';

class ProgressDashboard extends Component {
    render () {
        return (
            <div className="container ">
                <div className="dashboard-wrapper">
                    <DashboardHeader />
                    <DashboardPlot class="plot-wrapper"/>
                    <DashboardPlan />
                </div>
            </div>
        )
    }
}

export default ProgressDashboard
import React from 'react';
import Main from '../../components/Main/Main';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__topbar">
        <Topbar />
      </div>

      <div className="dashboard__body">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Topbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;

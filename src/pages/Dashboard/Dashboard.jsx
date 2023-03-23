import React from 'react';
import { Outlet } from 'react-router-dom';
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
        <div className="dashboard__outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

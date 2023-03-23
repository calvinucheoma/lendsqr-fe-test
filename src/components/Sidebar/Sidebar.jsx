import React from 'react';
import './Sidebar.scss';
import SidebarLink from './SidebarLink/SidebarLink';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarLink />
    </div>
  );
};

export default Sidebar;

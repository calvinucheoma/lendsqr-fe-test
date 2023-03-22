import React from 'react';
import './Topbar.scss';
import logo from '../../assets/logo.png';
import {
  Search,
  ArrowDropDown,
  NotificationsOutlined,
} from '@mui/icons-material';
import { Avatar, Menu, MenuItem, Button } from '@mui/material';
import userAvatar from '../../assets/userAvatar.png';

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="topbar">
      <div className="topbar__logo">
        <img src={logo} alt="company logo" />
        <h1>lendsqr</h1>
      </div>

      <div className="topbar__searchbar">
        <input type="search" placeholder="Search for anything" />
        <span>
          <Search />
        </span>
      </div>

      <div className="topbar__options">
        <h5>Docs</h5>
        <NotificationsOutlined className="topbar__options__notificationIcon" />
        <div className="topbar__options__userProfile">
          <Avatar src={userAvatar} />
          <div className="topbar__options__userProfile__dropdown">
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <p>Adedeji</p> <ArrowDropDown />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

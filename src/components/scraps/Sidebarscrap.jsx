import React, { useState } from 'react';
import './Sidebar.scss';
import { sidebarData } from '../../data/sidebarData';
import { KeyboardArrowDown } from '@mui/icons-material';

const Sidebar = () => {
  const [active, setActive] = useState(1);

  const setActiveSidebarOption = (id) => {
    setActive(id);
  };

  return (
    <div className="sidebar">
      {
        sidebarData
          .map((data) => {
            const { id, name, Icon } = data;
            if (name === 'Switch Organization') {
              return (
                <span key={id} className="sidebar__option">
                  <i>
                    <Icon />
                  </i>
                  <p>{name}</p>
                  <KeyboardArrowDown htmlColor="#213F7D" />
                </span>
              );
            } else {
              return null; // or <></> empty fragment
            }
          })
          .filter((data) => data) // Filter out any undefined or null values
      }

      {
        sidebarData
          .map((data) => {
            const { id, name, Icon } = data;
            if (name === 'Dashboard') {
              return (
                <span key={id} className="sidebar__option">
                  <i>
                    <Icon />
                  </i>
                  <p>{name}</p>
                </span>
              );
            } else {
              return null; // or <></> empty fragment
            }
          })
          .filter((data) => data) // Filter out any undefined or null values
      }

      <ul className="sidebar__list">
        <li>CUSTOMERS</li>
        {
          sidebarData
            .map((data) => {
              const { id, name, Icon } = data;
              if (id < 9) {
                return (
                  <li
                    key={id}
                    className={
                      id === active
                        ? 'sidebar__list__option active'
                        : 'sidebar__list__option'
                    }
                    onClick={() => setActiveSidebarOption(id)}
                  >
                    <i>
                      <Icon />
                    </i>
                    <p>{name}</p>
                  </li>
                );
              } else {
                return null; // or <></> empty fragment
              }
            })
            .filter((data) => data) // Filter out any undefined or null values
        }
      </ul>

      <ul className="sidebar__list">
        <li>BUSINESSES</li>
        {
          sidebarData
            .map((data) => {
              const { id, name, Icon } = data;
              if (id >= 9 && id <= 17) {
                return (
                  <li
                    key={id}
                    className={
                      id === active
                        ? 'sidebar__list__option active'
                        : 'sidebar__list__option'
                    }
                    onClick={() => setActiveSidebarOption(id)}
                  >
                    <i>
                      <Icon />
                    </i>
                    <p>{name}</p>
                  </li>
                );
              } else {
                return null; // or <></> empty fragment
              }
            })
            .filter((data) => data) // Filter out any undefined or null values
        }
      </ul>

      <ul className="sidebar__list">
        <li>SETTINGS</li>
        {
          sidebarData
            .map((data) => {
              const { id, name, Icon } = data;
              if (id >= 18 && id <= 20) {
                return (
                  <li
                    key={id}
                    className={
                      id === active
                        ? 'sidebar__list__option active'
                        : 'sidebar__list__option'
                    }
                    onClick={() => setActiveSidebarOption(id)}
                  >
                    <i>
                      <Icon />
                    </i>
                    <p>{name}</p>
                  </li>
                );
              } else {
                return null; // or <></> empty fragment
              }
            })
            .filter((data) => data) // Filter out any undefined or null values
        }
      </ul>
    </div>
  );
};

export default Sidebar;

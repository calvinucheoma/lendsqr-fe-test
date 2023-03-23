import React from 'react';
import { sidebarData } from '../../../data/sidebarData';
import { KeyboardArrowDown } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const SidebarLink = () => {
  return (
    <>
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
              const { id, name, Icon, path } = data;
              if (id < 9) {
                return (
                  <li key={id} className="sidebar__list__option">
                    <NavLink to={path}>
                      <i>
                        <Icon />
                      </i>
                      <p>{name}</p>
                    </NavLink>
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
              const { id, name, Icon, path } = data;
              if (id >= 9 && id <= 17) {
                return (
                  <li key={id} className="sidebar__list__option">
                    <NavLink to={path}>
                      <i>
                        <Icon />
                      </i>
                      <p>{name}</p>
                    </NavLink>
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
              const { id, name, Icon, path } = data;
              if (id >= 18 && id <= 20) {
                return (
                  <li key={id} className="sidebar__list__option">
                    <NavLink to={path}>
                      <i>
                        <Icon />
                      </i>
                      <p>{name}</p>
                    </NavLink>
                  </li>
                );
              } else {
                return null; // or <></> empty fragment
              }
            })
            .filter((data) => data) // Filter out any undefined or null values
        }
      </ul>
    </>
  );
};

export default SidebarLink;

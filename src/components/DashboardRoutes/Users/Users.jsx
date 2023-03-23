import './Users.scss';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usersData } from '../../../data/usersData';
import { Ring } from 'react-awesome-spinners';
import { MdFilterList } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
      );
      const data = await response.data;
      setUsers(data);
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <div className="users">
      <div className="users__header">
        <h1>Users</h1>
      </div>

      <div className="users__body__overview">
        {usersData.map((userData) => {
          const { id, icon, title, number } = userData;
          return (
            <div key={id}>
              <i>{icon}</i>
              <h5>{title}</h5>
              <h4>{number}</h4>
            </div>
          );
        })}
      </div>

      <div className="users__body__details">
        {isLoading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '50vh',
            }}
          >
            <Ring />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>
                  Organization
                  <i>
                    <MdFilterList />
                  </i>
                </th>
                <th>
                  Username
                  <i>
                    <MdFilterList />
                  </i>
                </th>
                <th>
                  Email
                  <i>
                    <MdFilterList />
                  </i>
                </th>
                <th>
                  Phone number
                  <i>
                    <MdFilterList />
                  </i>
                </th>
                <th>
                  Date joined
                  <i>
                    <MdFilterList />
                  </i>
                </th>
                <th>
                  Status
                  <i>
                    <MdFilterList />
                  </i>
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => {
                const { createdAt, orgName, userName, email, phoneNumber } =
                  user;
                const dateString = createdAt;
                const date = new Date(dateString);
                const formattedDate = `${date.getDate()}/${
                  date.getMonth() + 1
                }/${date.getFullYear()}`;

                return (
                  <tr key={index}>
                    <td>{orgName}</td>
                    <td>{userName}</td>
                    <td>{email}</td>
                    <td>{phoneNumber}</td>
                    <td>{formattedDate}</td>
                    <td>
                      status
                      <i>
                        <FiMoreVertical />
                      </i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="users__pagination"></div>
    </div>
  );
};

export default Users;

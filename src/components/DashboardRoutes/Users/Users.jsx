import './Users.scss';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usersData } from '../../../data/usersData';
import { Ring } from 'react-awesome-spinners';
import { MdFilterList } from 'react-icons/md';
import { FiMoreVertical } from 'react-icons/fi';
import paginate from '../../../utils/paginate';
import { ArrowBackIos, ArrowForwardIos, ExpandMore } from '@mui/icons-material';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await axios.get(
        'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'
      );
      const data = await response.data;
      setUsers(paginate(data));
      setIsLoading(false);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setUserData(users[page]); // update the userData state whenever the page changes
  }, [isLoading, page, users]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = users.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > users.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  return (
    <div className="users">
      <div className="users__header">
        <h1>Users</h1>
      </div>

      <div className="users__body__overview">
        {usersData.map((userData) => {
          const { id, icon, title, number, color } = userData;
          return (
            <div key={id}>
              <i
                style={{
                  color: color,
                }}
              >
                {icon}
              </i>
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
              {userData?.map((user, index) => {
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

      <div className="users__pagination">
        <div className="users__pagination__info">
          <p>Showing</p>
          <span>
            <p>{userData?.length * (page + 1)}</p> <ExpandMore />
          </span>
          <p className="users__pagination__info__length">
            out of {users?.length * userData?.length}
          </p>
        </div>

        <div className="users__pagination__pages">
          <button className="prev-btn" onClick={prevPage}>
            <ArrowBackIos />
          </button>
          {users?.map((user, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? 'active-btn' : 'null'}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            <ArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;

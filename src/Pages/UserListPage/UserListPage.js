import React, { useState, useEffect } from 'react';
import axiosInstance from '../../Components/axios/axios';
import { useUserContext } from '../../Components/UserContext/UserContext';
import Cookies from 'js-cookie';
import "./User.css"


import { MDBBadge, MDBBtn, MDBTable } from 'mdb-react-ui-kit';
import ResponsiveAppBar from '../../Components/Navbar/Navbar';
import TransitionAlerts from '../../Components/Alert/Alertsacses';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
  const [userList, setUserList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { authorization } = useUserContext();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const navigate = useNavigate();


  useEffect(() => {
    fetchUserList();
  }, [authorization, page]);

  const fetchUserList = async () => {
    setIsLoading(true);
    setError(null);
    const authorization = Cookies.get('authorization');
    if (!authorization) {
      setError('Authorization code not found');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosInstance.get(`moodle/user/student/all?pageNum=${page}&pageSize=${pageSize}`, {
        headers: {
          Authorization: authorization,
        },
      });

      console.log(response.data);

      setUserList(response.data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handIDClick = (id) => {
    localStorage.setItem('userId', id);
    navigate('/home/userlist/user');
  };

  const renderUserList = () => {
    if (!userList) {
      return null;
    }

    return (
      <>
      <br />
      <br />
      <br />
        <main>
          <br />
          <TransitionAlerts />
          <MDBTable align='middle'>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id} >
                  <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/logo-design-template-35b0a3e2315d19a46c046165f315b000.jpg?ts=1592240511'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>
                          <td style={{ color: "black" }}>{user.family} - </td>
                          <td style={{ color: "black" }}>{user.firstName} </td>
                        </p>
                        <p className='text-muted mb-0'>
                          <td>{user.email}  </td>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>ID:  {user.id}  </td>
                  <td>

                    <p className='fw-normal mb-1'>
                      <td style={{ color: "black" }}>City:     {user.city}  </td>
                    </p>
                    <p className='text-muted mb-0'>
                      <td>Phone:   {user.phone}  </td>
                    </p>
                  </td>
                  <td style={{ color: "black" }}>Mobile:   {user.mobile}  </td>

                  <td>
                    <MDBBadge color='success' pill>
                      Active
                    </MDBBadge>
                    <br />
                    <MDBBadge color='danger' pill onClick={() => handIDClick(user.id)} style={{cursor:("pointer")}}>
                      moree
                    </MDBBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </MDBTable>

          <nav aria-label="Page navigation example " >

            <nav aria-label="..." >
              <ul class="pagination pagination-circle">
                <li class="page-item">
                  <a class="page-link" onClick={prevPage} disabled={page === 1}>Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">2 <span class="visually-hidden">(current)</span></a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" onClick={nextPage}>Next</a>
                </li>
              </ul>
            </nav>
          </nav>
        </main>
      </>
    );
  };

  return (
    <div>
      <ResponsiveAppBar />

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {renderUserList()}
    </div>
  );
};

export default UserListPage;
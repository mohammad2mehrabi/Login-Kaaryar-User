import React, { useState } from 'react';
import axiosInstance from '../../Components/axios/axios';
import { useUserContext } from '../../Components/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaTelegramPlane, FaSnapchatGhost, FaTwitch, FaTwitter } from "react-icons/fa";
import "./style-login.css"
import Loader from '../../Components/Loader/Loader';
import AlertPage from '../../Components/Alert/Alerterorr';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setProfile } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append('username', username);
      formData.append('password', password);

      const response = await axiosInstance.post('oauth2/token', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data && response.data.access_token) {
        Cookies.set('authorization', `Bearer ${response.data.access_token}`, { expires: 1 });

        localStorage.setItem('username , roles', JSON.stringify(`UserName: ${response.data.profile.username}, UserRoles: ${response.data.profile.roles}`));

        setProfile(response.data.profile);

        navigate('/home/userlist');
        window.location.reload();
      } else {
        setError('Unexpected response from the server');
      }

    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="container1">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <h1 className="title">Login Page</h1>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" id="username" placeholder='Username' className='ContainerLogin-form-input' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" id="password" placeholder='Password' className='ContainerLogin-form-input' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            {isLoading ? (
              <p><Loader /></p>
            ) : (
              <button type="submit" className="btn transparent">Log in</button>
            )}
            {error && <p>{<AlertPage />}</p>}
            <div className="social-media">
              <a href="#" className="social-icon">
                <FaTelegramPlane />
              </a>
              <a href="#" className="social-icon">
                <FaSnapchatGhost />
              </a>
              <a href="#" className="social-icon">
                <FaTwitch />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here !</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" >
              hi admin
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
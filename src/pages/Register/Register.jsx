import React, { useState } from 'react';
import './Register.scss';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.png';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const registerUser = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="register__logo">
        <img src={logo} alt="company logo" />
        <h1>lendsqr</h1>
      </div>

      <div className="register__body">
        <img src={hero} alt="hero img" />

        <div className="register__body__form">
          <h1>Welcome!</h1>
          <h4>Enter details to login</h4>
          <form onSubmit={registerUser}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="register__body__form__password__input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange}
              />
              <span>
                <p onClick={togglePasswordVisibility}>
                  {showPassword ? 'Hide' : 'Show'}
                </p>
              </span>
            </div>
            <span>
              <p>Forgot Password?</p>
            </span>
            <button type="submit">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

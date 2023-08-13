import React, { useState } from 'react';
import axios, { Axios } from 'axios';
import './App.css'

function LoginPage() {
  const [data, setData] = useState({username: '', password: ''});
  const [error, setErrpt] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value})
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const url = 'http://192.168.1.125:5000/api/users/login';
      const {data: {token}} = await axios.post(url, data);
      localStorage.setItem("token", token);
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };


  return (

    <div className="container">

      <div className="l-container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/esokologo.png'} alt="" />
        </div>
        <ul>
            <li>About</li>
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>FAQ</li>
        </ul>
      </div>

      <div className="r-container">
        <div className="form-sec">
          <p>Login to your<br/> student dashboard</p>
          <form onSubmit={handleSubmit}>
            <input
              name='username'
              type="text"
              placeholder="USER ID"
              value={data.username}
              onChange={handleChange}
              required
            />
            <input
              name='password'
              type="password"
              placeholder="PASSWORD"
              value={data.password}
              onChange={handleChange}
              required
            />
            <div className='base'>
              <input type="submit" value="Login" />
              <a href="#">Forgot User ID or Password</a>
            </div>
          </form>
        </div>

        <div className="img-sec">
          <img src={process.env.PUBLIC_URL + '/formimg.svg'} alt="" />
        </div>


      </div>

    </div>
  );
}

export default LoginPage;

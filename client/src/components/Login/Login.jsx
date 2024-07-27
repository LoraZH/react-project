import useForm from '../../hooks/useForm';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import AuthContext from '../../contexts/authContext';


const LoginFormKeys = {
  Email: 'email',
  Psw: 'psw'
};


export default function Login() {
  const {loginSubmitHandler} = useContext(AuthContext);

  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Psw]: ''
  });


  return (
    <div style={{ width: "100%" }}>
      <form action="action_page.php" method="post" onSubmit={onSubmit}>
        <div className="p-4">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="john_d@abv.bg"
            id="email"
            name={LoginFormKeys.Email}
            required=""
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="*********"
            name={LoginFormKeys.Psw}
            required=""
            onChange={onChange}
            value={values[LoginFormKeys.Psw]}
          />
          <button type="submit">Login</button>
          <div className="container signup">
            <div>
              Don't have an account? <Link to="/register">Sign up</Link>.
            </div>
          </div>
        </div>
        <div className="p-4" style={{ backgroundColor: "#f1f1f1" }}></div>
      </form>
    </div>
  );
}

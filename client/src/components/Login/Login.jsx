import useForm from '../../hooks/useForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const LoginFormKeys = {
  Email: 'email',
  Psw: 'psw'
};

export default function Login({loginSubmitHandler}) {
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Psw]: ''
  });

// const [form, setForm] = useState({email: '', psw: ''}) 

// function onChange(field, value) {
// setForm({...form, [field]: value})
// }

// function onSubmit(e) {
//   e.preventDefault()
//   loginSubmitHandler(form)
// }

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

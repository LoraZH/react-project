import useForm from '../../hooks/useForm';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const submitHandler = (values) => {
    console.log('Form submitted with values:', values);
  };

  const { values, onChange, onSubmit } = useForm({ email: '', psw: '' }, submitHandler);

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
            name="email"
            required=""
            onChange={onChange}
            value={values.email}
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="*********"
            name="psw"
            required=""
            onChange={onChange}
            value={values.psw}
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

import { useContext, useState } from 'react'
import '../Register/Register.css'
import AuthContext from '../../contexts/authContext'
import useForm from '../../hooks/useForm'

const RegisterFormKeys = {
  Email: 'email',
  password: 'password',
  passwordConfirm: 'password-repeat'
}

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const [error, setError] = useState('');
  
  const { values, onChange, onSubmit } = useForm((values) => {
    if (values[RegisterFormKeys.password] !== values[RegisterFormKeys.passwordConfirm]) {
      setError('Passwords do not match');
    } else {
      setError('');
      registerSubmitHandler(values);
    }
  }, {
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.password]: '',
    [RegisterFormKeys.passwordConfirm]: '',
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="p-4">
        <p>Please fill in this form to create an account.</p>
        <hr />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="john_d@abv.bg"
          name="email"
          id="email"
          required
          onChange={onChange}
          value={values[RegisterFormKeys.Email]}
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="*********"
          name="password"
          id="password"
          required
          onChange={onChange}
          value={values[RegisterFormKeys.password]}
        />
        <label htmlFor="password-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="*********"
          name="password-repeat"
          id="password-repeat"
          required
          onChange={onChange}
          value={values[RegisterFormKeys.passwordConfirm]}
        />
        <hr />
        <button type="submit" className="registerbtn">
          Register
        </button>
      </div>
      <div className="container signin">
        <p>
          Already have an account? <a href="/login">Sign in</a>.
        </p>
      </div>
    </form>
  )
}

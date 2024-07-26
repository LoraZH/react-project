import { useContext } from 'react'
import '../Register/Register.css'
import AuthContext from '../../contexts/authContext'
import useForm from '../../hooks/useForm'

const RegisterFormKeys = {
  Email: 'email',
  Psw: 'psw',
  PswConfirm: 'psw-repeat'
}

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const {values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Psw]: '',
    [RegisterFormKeys.PswConfirm]: '',
  })


  return (
    <form action="action_page.php" onSubmit={onSubmit}>
      <div className="p-4">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="john_d@abv.bg"
          name="email"
          id="email"
          required=""
          onChange={onChange}
          values={values[RegisterFormKeys.Email]}
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="*********"
          name="psw"
          id="psw"
          required=""
          onChange={onChange}
          values={values[RegisterFormKeys.Psw]}
        />
        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="*********"
          name="psw-repeat"
          id="psw-repeat"
          required=""
          onChange={onChange}
          values={values[RegisterFormKeys.PswConfirm]}
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
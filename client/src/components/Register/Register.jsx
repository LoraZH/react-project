import '../Register/Register.css'
export default function Register(){
    return(
        <form action="action_page.php">
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
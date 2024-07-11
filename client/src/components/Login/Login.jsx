import './Login.css'

export default function Login() {
  return (
    <div style={{width: "100%"}}>
    <form action="action_page.php" method="post">
      <div className="p-4">
        <label htmlFor="uname">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required="" />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required=""
        />
        <button type="submit">Login</button>
        <div className="container signup">
    <p>
            Don't have an account? <a href="/register">Sign up</a>.
    </p>
  </div>
       

      </div>
      <div className="p-4" style={{ backgroundColor: "#f1f1f1" }}>
      </div>
    </form>
    </div>

  )
}
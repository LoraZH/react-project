import { useState } from 'react';
import './Login.css'

export default function Login() {
  // const [user, setUser] = useState({});

  // const formSubmitHandler = (e) => {
  //     e.preventDefault();

  //     const formData = new FormData(e.currentTarget);

  //     console.log(formData.get('email'));
  //     setUser({
  //       email: formData.get('username'),
  //     })
  // }
  return (
    <div style={{width: "100%"}}>
    <form action="action_page.php" method="post" >
      <div className="p-4">
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="john_d@abv.bg" name="email" required="" />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="*********"
          name="psw"
          required=""
        />
        <button type="submit" >Login</button>
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
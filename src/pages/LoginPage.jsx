import { useState } from "react"
import { Link, useOutletContext } from "react-router";


export default function LoginPage() {
  console.log(useOutletContext());
  const { isLoggedIn, SetIsLoggedIn, SetUsername } = useOutletContext()
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [msg, SetMsg] = useState("");
  const [data, SetData] = useState({});

  async function register(e) {
    SetMsg("");
    e.preventDefault();

    if (username === "") {
      SetMsg("Please Enter Username.");
      return
    }
    if (password === "") {
      SetMsg("Please Enter password.");
      return
    }

    const response = await fetch('http://mywebprojectapi.aabdulaziz.engineer/login', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });

    if (!response.ok) {
      console.log("Request ERROR: ", response.status);
    }

    const datajson = await response.json();

    if (datajson['success']) {
      SetMsg(data['success']);
      SetIsLoggedIn(true);
      SetUsername(username);
    }
    if (datajson['error']) {
      SetMsg(data['error']);
    }
    SetData(datajson);
  }

  const usernameOnChange = (e) => {
    setUsername(e.target.value);
  }
  const passwordOnChange = (e) => {
    SetPassword(e.target.value);
  }
  if (!data['success']) {
    return (
      <form action="">
        <fieldset>
          <legend>Register</legend>
          <label htmlFor="username">
            Enter Your Username
            <input type="text" id="username" name="username" onChange={usernameOnChange} />
          </label>
          <label htmlFor="password">
            Enter Your Password
            <input type="password" id="password" name="password" onChange={passwordOnChange} />
          </label>
          <span>{msg}</span>
          <button type="submit" onClick={register}>Login</button>
        </fieldset>
      </form>
    )
  } else {
    return (
      <span>You are now logged in you can go to the <Link to="/home">Home page</Link>.</span>
    )
  }
}

import { useState } from "react"
import { Link, useOutletContext } from "react-router";
import useSWR from "swr";


export default function RegisterPage() {
  console.log(useOutletContext());
  const { isLoggedIn, SetIsLoggedIn, SetUsername } = useOutletContext()
  const [username, setUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [rpassword, SetRPassword] = useState("");
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
    if (rpassword === "") {
      SetMsg("Please Repeat Password.");
      return
    }


    if (password !== rpassword) {
      SetMsg("Passwords dont match.");
      return
    }
    const response = await fetch('http://webproject.aabdulaziz.engineer/api/register', {
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
  const rpasswordOnChange = (e) => {
    SetRPassword(e.target.value);
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
          <label htmlFor="rpassword">
            Repeat Your Password
            <input type="password" id="rpassword" name="rpassword" onChange={rpasswordOnChange} />
          </label>
          <span>{msg}</span>
          <button type="submit" onClick={register}>Register</button>
        </fieldset>
      </form>
    )
  } else {
    return (
      <span>You are now registered you can go to the <Link to="/home">Home page</Link>.</span>
    )
  }
}

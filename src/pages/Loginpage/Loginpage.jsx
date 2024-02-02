import { useContext, useState } from "react";
import { Title } from "../../components/Title/Title";
import style from "./Loginpage.module.scss";
import { UserContext } from "../../context/UserContext";

export function Loginpage() {
  const [message, setMessage] = useState("Indtast login oplysninger");

  const { setUserData, userData } = useContext(UserContext);

  async function handleSignUp(event) {
    event.preventDefault();

    let url = "https://api.mediehuset.net/token";

    if (event.target.username.value === "") {
      setMessage("Venligst indtast dit brugernavn");
      return;
    }

    if (event.target.password.value === "") {
      setMessage("Venligst indtast dit password");
      return;
    }

    let body = new URLSearchParams();

    body.append("username", event.target.username.value);
    body.append("password", event.target.password.value);

    // Vi kan gemme det i localstorage -
    // Vi kan lave en context

    let options = {
      method: "POST",
      body: body,
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      console.log(data);
      if (data?.status === "Ok") {
        setUserData(data);
        setMessage(`Du er nu logget ind som ${data.user.firstname}`);
      } else {
        setMessage("Der opstod en fejl - prøv igen");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Title title={"Login"} />

      {!userData && message && <b style={{textAlign: 'center'}}>{message}</b>}

      {userData ?
        <>
          <div style={{textAlign: 'center'}}>Du er nu logget ind som {userData.user.firstname}</div>
        </>

        :
        <form
          className={style.loginFormStyle}
          onSubmit={(event) => handleSignUp(event)}
        >

          <label>
            Username:
            <input type="text" name="username"></input>
          </label>
          <label>
            Password:
            <input type="password" name="password"></input>
          </label>
          <input type="submit" value="Sign up"></input>
        </form>
      }
    </>
  );
}

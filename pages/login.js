import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  function updateUser(event) {
    let { name, value } = event.target;
    setUser(prevValues => {
      return {
        ...prevValues,
        [name]: value
      }
    })
  }

  function handleClick(e, user){
    e.preventDefault();
    login(user);
  }

  return (
    
      <div className="login">
        <main className="login-container">
          <h1>Log-in</h1>
          <form>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={event => updateUser(event)}
              placeholder="Nome de usuário"
              required
              autoFocus
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={event => updateUser(event)}
              placeholder="Senha"
              required
            />
            <input type="submit" onClick={ e => handleClick(e, user) } value="Entrar" />
          </form>
          <h2>Cadastre-se</h2>
        </main>
      </div>
  );
}

export default LoginPage;
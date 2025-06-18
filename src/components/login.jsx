import "./login.css";

import { Link } from "react-router-dom";

export function Login() {
  return (
    <div className="login_div">
      <img src="/public/logo.png" alt="dog" />
      <div className="login_user">
        <form action="/index">
          <img src="/src/assets/login/user.png" alt="user" />
          <input
            className="login_usuario"
            name="Usuario"
            type="text"
            placeholder="Usuário"
            required
          />
          <img src="/src/assets/login/senha.png" alt="senha" />
          <input
            className="login_senha"
            name="Senha"
            type="password"
            placeholder="Senha"
            required
          />
          <button type="submit">Acessar</button>
          <Link to="/index">
            <button type="button" style={{ fontSize: "60%" }}>
              DEBUG: Acessar Index
            </button>
          </Link>
          <Link to="/estoque">
            <button type="button" style={{ fontSize: "60%" }}>
              DEBUG: Acessar Estoque
            </button>
          </Link>
          <Link to="/stats">
            <button type="button" style={{ fontSize: "60%" }}>
              DEBUG: Acessar Stats
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

import './login.css'

import { Link } from 'react-router-dom';

export function login(){
  

  return (
     <div className = 'login_div'>
        <img src="/public/logo.png" alt="dog" />
        <div className = 'login_user'>
          <form action="/index">
              <img src="/src/assets/login/user.png" alt="user" />
              <input className = 'login_usuario' name = "Usuario" type="text" placeholder="Usuário" required/>
              <img src="/src/assets/login/senha.png" alt="senha" />
              <input className = 'login_senha' name = "Senha" type="password" placeholder="Senha" required/>
              <button type="submit">Acessar</button>
              {/* Bruno Coloquei o link do Acessar Index já no acessar */}
              <Link to="/index">
              <p style={{ fontSize: "75%"}}>
              DEBUG: Acessar Index
              </p>
              </Link>
              <Link to="/estoque">
                <p style={{ fontSize: "75%"}}>
                DEBUG: Acessar Estoque
                </p>
              </Link>
          </form>
        </div>
      </div>
    );
}


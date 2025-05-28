import './login.css'

export function login(){
  

  return (
     <div className = 'login_div'>
        <div className = "login_div2">
          <img src="/public/logo.png" alt="dog" />
        </div>
        <div className = 'login_user'>
          <form action="">
              <img src="/src/assets/user.png" alt="user" />
              <input className = 'login_usuario' name = "Usuario" type="text" placeholder="Usuário" required/>
              <img src="/src/assets/senha.png" alt="senha" />
              <input className = 'login_senha' name = "Senha" type="password" placeholder="Senha" required/>
              <button type="submit">Acessar</button>
          </form>
        </div>
      </div>
    );
}


import "./login.css";

import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function conferirLogin(e) {
    e.preventDefault();
    const usuario = e.target.Usuario.value;
    const senha = e.target.Senha.value;

    if (usuario != '' && senha != '') {
      navigate('/stats');
    }
    else {
      alert('Preencha todos os campos!');
    }
  }


  return (
    <div className='wrapLogin'> {/* só pra conseguir centralizar verticalmente sem afetar as outras paginas */}
      <div className="login_div">
        <img src="/public/logo.png" alt="dog" />
        <div className="login_user">
          <form onSubmit={conferirLogin}>

        <div className='inputsForm'>
          <div className='loginUsuario'>
            <img src="/src/assets/login/user.png" alt="user" />
            <input
              className="login_usuario"
              name="Usuario"
              type="text"
              placeholder="Usuário"
              required
            />
          </div>

          <div className='loginSenha'>
            <img src="/src/assets/login/senha.png" alt="senha" />
            <input
              className="login_senha"
              name="Senha"
              type="password"
              placeholder="Senha"
              required
            />
          </div>
          </div>
            
            <button type="submit">Acessar</button>

          </form>
        </div>
      </div>
    </div>
  );
}

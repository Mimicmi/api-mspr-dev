import '../Login/Login.css';
import React, { useState, useContext } from 'react';
import Api from '../../Api';
import Alert from 'react-bootstrap/Alert';


import { UserContext } from '../../services/UserService'

function Login() {

  const { updateJwt } = useContext(UserContext);


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const loginAccount = async () => {
    const data = { "email": email, "password": password };

    Api.post('authenticate', data)
      .then(res => res.data)
      .then(
        (result) => {
          updateJwt(result)
          //TODO : suite rôle
        },
        (error) => {
          switch (error.response.data) {
            case "Email incorrect":
              setError(<Alert key="danger" dismissible  onClose={() => setError("")} variant="warning">Email Inccorret</Alert>)
              break;

              case "Mot de passe incorrect":
                setError(<Alert key="danger" dismissible onClose={() => setError("")} variant="warning">Mot de passe incorrect</Alert>)
                break;
          
            default:
              setError(<Alert key="danger" dismissible onClose={() => setError("")} variant="danger">Une erreur est survenu !</Alert>)
              break;
          }
        }
      )
  }

  return (
    <main class="form-signin">

        <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
        <h1 class="h3 mb-3 fw-normal">Créer un compte</h1>

        <div>{error}</div>
        <div>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            <label for="floatingInput">Adresse mail</label>
          </div>

          <div class="form-floating">
            <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Mot de passe</label>
          </div>

          <button onClick={loginAccount} className="w-100 btn btn-lg btn-primary my-3" on>Se connecter</button>
        </div>
    </main>
  );
}

export default Login;

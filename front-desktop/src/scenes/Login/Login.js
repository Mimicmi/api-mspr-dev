import '../Login/Login.css';
import React, { useState, useContext } from 'react';
import Api from '../../Api';
import Alert from 'react-bootstrap/Alert';


import { UserContext } from '../../services/UserService'
import { useNavigate } from 'react-router-dom';

import account from "../../assets/img/account.png"

function Login() {
  const navigate = useNavigate();

  const { updateJwt, updateRole, updateUserId, updateClientId, updateBotanistId } = useContext(UserContext);


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
          aksUserId()
        },
        (error) => {
          switch (error.response.data) {
            case "Email incorrect":
              setError(<Alert key="danger" dismissible onClose={() => setError("")} variant="warning">Email Inccorret</Alert>)
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


  const aksUserId = async () => {
    Api.get('/user/' + email)
      .then(res => res.data)
      .then(
        (result) => {
          updateUserId(result.id)
          askClientId(result.id)
        },
        (error) => {
          setError(<Alert key="danger" dismissible onClose={() => setError("")} variant="danger">Une erreur est survenu !</Alert>)
        }
      )
  }

  const askClientId = async (userId) => {
    Api.get('/client/user/' + userId)
      .then(res => res.data)
      .then(
        (result) => {
          updateClientId(result[0].id)
          askRole(result[0].id)
        },
        (error) => {
          setError(<Alert key="danger" dismissible onClose={() => setError("")} variant="danger">Une erreur est survenu !</Alert>)
        }
      )
  }
    

  const askRole = async (clientId) => {
    Api.get('/botanist/client/' + clientId)
      .then(res => res.data)
      .then(
        (result) => {
          updateBotanistId(result[0].id)
          loginFinish(true)
        },
        (error) => {
          loginFinish(false)
        }
      )
  }

  const loginFinish = async (isBotanist) => {

    if(isBotanist) {
        updateRole("ROLE_BOTANIST")
    } else {
      updateRole("ROLE_CLIENT")
    }

    navigate("/home")

  }


  return (
    <main class="form-signin">

      <img class="mb-4" src={account} alt="" width="72" height="57" />
      <h1 class="h3 mb-3 fw-normal">Connectez-vous</h1>

      <div>{error}</div>
      <div>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          <label for="floatingInput">Adresse email</label>
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

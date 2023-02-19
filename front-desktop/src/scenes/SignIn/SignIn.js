import '../Login/Login.css';
import React, { useState, useContext } from 'react';

import Api from '../../Api';

import AddressInput from '../../components/AddressInput/AddressInput';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import { UserContext } from '../../services/UserService'

import { Navigate } from "react-router-dom";


function SignIn() {

    const [error, setError] = useState(false);
    const { updateJwt, updateRole } = useContext(UserContext);


    const loginAccount = async (id_user) => {
        const data = { "password": password, "email": email };

        Api.post('authenticate', data)
            .then(res => res.data)
            .then(
                (result) => {
                    updateJwt(result)
                    createClients(id_user)
                },
                (error) => {
                    setError(true)
                }
            )
    }

    const createClients = async (id_user) => {
        const data = {
            "user": {
                "id": id_user
            },
            "address": address,
            "lat": latitude,
            "lon": longitude
        }

        Api.post('clients', data)
            .then(res => res.data)
            .then(
                (result) => {
                    if(isBotanist) {
                        updateRole("ROLE_BOTANIST")
                        createBotanist(result)
                    } else {
                        updateRole("ROLE_CLIENT")
                        setStep(steps.Success);
                    }
                },
                (error) => {
                    setError(true)
                }
            )
    }

    const createBotanist = async (id_client) => {
        const data = {
            "client": {
                "id": id_client
            },
            "siret": siret,
            "documents": ""
        }

        Api.post('botanists', data)
            .then(res => res.data)
            .then(
                (result) => {
                    setStep(steps.Success);
                },
                (error) => {
                    setError(true)
                }
            )
    }


    const createAccount = async () => {
        setStep(steps.Loaded);
        const data = { "pseudo": pseudo, "password": password, "email": email };

        Api.post('users', data)
            .then(res => res.data)
            .then(
                (result) => {
                    loginAccount(result)
                },
                (error) => {
                    setStep(steps.First);
                    setError(true)
                }
            )
    }

    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const [isBotanist, setIsBotanist] = useState(false)
    const [siret, setSiret] = useState('')

    const steps = {
        First: 0,
        Second: 1,
        Third: 2,
        Send: 3,
        Loaded: 4,
        Error: 5,
        Success: 6
    }

    const [step, setStep] = useState(steps.First);

    const renderSwitch = () => {
        switch (step) {
            case steps.First:
                let alert = <div></div>
                if (error) {
                    alert = <Alert key="danger" variant="danger">Merci de re-essayer dans un instant, votre compte n'a pas pu être créer</Alert>
                }

                return (
                    <div>
                        {alert}
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
                            <label for="floatingInput">Adresse mail</label>
                        </div>

                        <div class="form-floating">
                            <input onChange={(event) => setPseudo(event.target.value)} type="text" value={pseudo} class="form-control" id="floatingInput" placeholder="Pseudo" />
                            <label for="floatingInput">Pseudo</label>
                        </div>

                        <div class="form-floating">
                            <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Mot de passe</label>
                        </div>

                        <AddressInput
                            address={address}
                            setAddress={setAddress}
                            latitude={latitude}
                            setLatitude={setLatitude}
                            longitude={longitude}
                            setLongitude={setLongitude}
                        />

                        <button onClick={() => { setStep(steps.Second) }} className="w-100 btn btn-lg btn-primary my-3" on>Suivant</button>
                    </div>
                );

            case steps.Second:
                return (
                    <div>

                        <h4>Vous voulez :</h4>

                        <div>
                            <button onClick={() => { setStep(steps.Send); setIsBotanist(false) }} class="w-100 btn btn-lg btn-primary my-2" on>Garder / Faire garder vos plantes</button>
                            <button onClick={() => { setStep(steps.Third); setIsBotanist(true) }} class="w-100 btn btn-lg btn-primary" on>être Botaniste</button>
                        </div>


                        <div className='d-flex'>
                            <button onClick={() => { setStep(steps.First) }} class="w-100 btn btn-lg btn-secondary my-5" on>Retour</button>
                        </div>
                    </div>
                );

            case steps.Third:
                return (
                    <div class="form-floating">
                        <input onChange={(event) => setSiret(event.target.value)} type="text" value={siret} class="form-control" id="floatingInput" placeholder="Pseudo" />
                        <label for="floatingInput">Votre numéro de SIRET</label>


                        <div className='d-flex'>
                            <button onClick={() => { setStep(steps.Send) }} class="w-100 btn btn-lg btn-primary my-5" on>Suivant</button>
                            <button onClick={() => { setStep(steps.Second) }} class="w-100 btn btn-lg btn-secondary my-5" on>Retour</button>
                        </div>
                    </div>


                );

            case steps.Send:
                return (
                    <div>
                        <button onClick={createAccount} class="w-100 btn btn-lg btn-secondary my-5" on>Créer votre compte</button>
                    </div>
                );
            case steps.Loaded:
                return (
                    <Spinner animation="border" variant="primary" />
                );

            case steps.Success:
                    return <Navigate replace to="/" />
        }
    }

    return (
        <main class="form-signin">
            <form>
                <img class="mb-4" src="../assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                <h1 class="h3 mb-3 fw-normal">Créer un compte</h1>

                {renderSwitch()}

            </form>
        </main>
    );
}

export default SignIn;

import Api from '../../Api';
import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";


function CreatePlante() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        Api.get('species')
            .then(res => res.data)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setSpecies(result);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    if (error) {
        return <Navigate replace to="/403" />
    } else if (!isLoaded) {
        return (<div> En attente du serveur</div>);
    } else {
        return (
            <div className="mt-5 mb-2">
                <h3>Enregrister une nouvelle plante</h3>

                <form>
                    <fieldset>
                        <label>
                            <p>Name</p>
                            <input name="name" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label>
                            <p>Adresse de la plante</p>
                            <input name="adresse" />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label>
                            <p>Espece</p>
                            <select name="espece">
                                <option value="">--Please choose an option--</option>
                                {species.map(specie => (
                                    <option value={specie.id}>{specie.specie}</option>
                                ))}
                            </select>
                        </label>
                    </fieldset>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreatePlante;

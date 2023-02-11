import Api from "../../Api";
import PostsForPlant from "../../components/PostsForPlant/PostsForPlant";
import ResumePlant from "../../components/ResumePlant/ResumePlant";

import React, { useState, useEffect } from 'react';

import { useParams } from "react-router-dom";


function Plant() {

    const { plant_id} = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [plant, setPlant] = useState([]);

    useEffect(() => {
        Api.get('plants/' + plant_id)
          .then(res => res.data)
          .then(
            (result) => {
              setIsLoaded(true);
              setPlant(result);
            },

            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    return (
        <div class="container">
            <div className="mt-4 mb-3">
                <ResumePlant plant={plant} ></ResumePlant>
            </div>
            <div>
            <PostsForPlant plant_id={plant.id}></PostsForPlant> 
            </div>
        </div>

    )

}
export default Plant;

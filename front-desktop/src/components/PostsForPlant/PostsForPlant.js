import Api from '../../Api';
import PostForPlant from '../PostForPlant/PostForPlant';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Navigate } from "react-router-dom";

function PostsForPlant({plant_id}) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
      Api.get('plants')
        .then(res => res.data)
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
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

    return(<div>Wait</div>)
  } else {

    return (
      <div className="container">
          <div style={{textAlign:'left'}}>
            <Button variant="outline-primary" className='mx-2 mb-3'><h2>Mur Photos</h2></Button>
          </div>

          <div className="container">
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
              {items.map(item => (
                <div className="col">
                  <PostForPlant key={item.id} photo={item}></PostForPlant>
                </div> 
              ))}
            </div>
        </div>
      </div>
    )
  }
}

export default PostsForPlant;

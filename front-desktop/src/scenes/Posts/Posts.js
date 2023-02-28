
import Post from "../../components/Post/Post";
import React, { useState, useEffect, useContext } from 'react';
import ErrorServer from '../../scenes/Error/ErrorServer';
import Api from '../../Api';


function Posts() {

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);


	const getPlantsClient = () => {
		Api.get('photos')
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
	  }

	  useEffect(() => {
		getPlantsClient()
	  }, [])


	  const contentPlant = () => {
		if (items.length <= 0) {
		  return <h3>Aucune Publication</h3>
		} else {
		  return (
			items.map(item => (
			  <div className='mb-3'>
				<Post photo={item}></Post>
			  </div>
			))
		  )
		}
	  }

	

	  if (error) {
		return <ErrorServer></ErrorServer>
	
	  } else if (!isLoaded) {
		return (<div></div>)
	  } else {
	
		return (
		  <div className='text-left'>
			<div className='mt-5 mb-2'>
				{contentPlant()}
			</div>
		  </div>
		);
	  }


	return (
        <></>

	)
}
export default Posts;

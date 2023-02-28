import PostComment from '../../components/Post/PostComment/PostComment';
import PostContent from '../../components/Post/PostContent/PostContent';
import './Post.css'
import React, { useState, useEffect } from 'react';
import Api from '../../Api';
import ErrorServer from '../../scenes/Error/ErrorServer';
import Spinner from 'react-bootstrap/Spinner';


function Post({ photo }) {

	const [commentShow, setCommentShow] = useState(false)
	const handleComment = () => setCommentShow(!commentShow)

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [item, setItem] = useState();

	useEffect(() => {
		Api.get('photosCustom/' + photo.id)
			.then(res => res.data)
			.then(
				(result) => {
					setIsLoaded(true);
					setItem(result);
				},

				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			)
	}, [])



	const commentView = () => {
		if (commentShow) {
			return (
				<PostComment></PostComment>
			)
		}
	}


	if (error) {
		return <ErrorServer></ErrorServer>
	
	  } else if (!isLoaded) {
		return (<Spinner animation="grow" variant="primary" />)
	  } else {

		return (
			<section className='text-left'>
				<div className="card m-auto" style={{ maxWidth: '42rem' }}>
					<div className="card-body">
						<PostContent photo={item} handleComment={(handleComment)}></PostContent>
						{commentView()}
					</div>
				</div>
			</section>
		)

	  }

	
}
export default Post;

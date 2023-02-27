import PostComment from '../../components/Post/PostComment/PostComment';
import PostContent from '../../components/Post/PostContent/PostContent';
import './Post.css'
import React, { useState } from 'react';

function Post() {

	const [commentShow, setCommentShow] = useState(false)
	const handleComment = () => setCommentShow(!commentShow)

	const commentView = () => {
		if (commentShow) {
			return (
				<PostComment></PostComment>
			)
		}
	}

	return (
		<section className='text-left'>
			<div className="card m-auto" style={{ maxWidth: '42rem' }}>
				<div className="card-body">
					<PostContent handleComment={(handleComment)}></PostContent>
					{commentView()}
				</div>
			</div>
		</section>
	)
}
export default Post;

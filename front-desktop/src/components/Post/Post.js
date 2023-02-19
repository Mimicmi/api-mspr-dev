import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

import './Post.css'

function Post({ post }) {

	return (
		<section className='text-left'>
			<div className="card" style={{maxWidth: '42rem'}}>
				<div className="card-body">

					<div className="d-flex mb-3">
						<a href="">
							<img src='https://mdbcdn.b-cdn.net/img/new/avatars/18.webp' className="border rounded-circle me-2"
								alt="Avatar" style={{height: "40px"}} />
						</a>
						<div>
							<a href="" className="text-dark mb-0">
								<strong>Anna Doe</strong>
							</a>
							<a href="" className="text-muted d-block" style={{marginTop: "-6px"}}>
								<small>10h</small>
							</a>
						</div>
					</div>

					<div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Atque ex non impedit corporis sunt nisi nam fuga
							dolor est, saepe vitae delectus fugit, accusantium qui
							nulla aut adipisci provident praesentium?
						</p>
					</div>
				</div>

				<div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
					<img src='https://mdbcdn.b-cdn.net/img/new/standard/people/077.webp' className="w-100" />
					<a href="#!">
						<div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
					</a>
				</div>

				<div className="card-body">

					<div className="d-flex justify-content-between mb-3">
						<div>
							<a href="">
								<i className="fas fa-thumbs-up text-primary"></i>
								<i className="fas fa-heart text-danger"></i>
								<span>124</span>
							</a>
						</div>
						<div>
							<a href="" className="text-muted"> 8 comments </a>
						</div>
					</div>

					<div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
						<button type="button" className="btn btn-link btn-lg" data-mdb-ripple-color="dark">
							<i className="fas fa-thumbs-up me-2"></i>Like
						</button>
						<button type="button" className="btn btn-link btn-lg" data-mdb-ripple-color="dark">
							<i className="fas fa-comment-alt me-2"></i>Comment
						</button>
					</div>

					<div className="d-flex mb-3">
						<a href="">
							<img src='https://mdbcdn.b-cdn.net/img/new/avatars/18.webp' className="border rounded-circle me-2"
								alt="Avatar" style={{height: "40px"}} />
						</a>
						<div className="form-outline w-100">
							<textarea className="form-control" id="textAreaExample" rows="2"></textarea>
							<label className="form-label" htmlFor="textAreaExample">Write a comment</label>
						</div>
					</div>

					<div className="d-flex mb-3">
						<a href="">
							<img src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp' className="border rounded-circle me-2"
								alt="Avatar" style={{height: "40px"}} />
						</a>
						<div>
							<div className="bg-light rounded-3 px-3 py-1">
								<a href="" className="text-dark mb-0">
									<strong>Malcolm Dosh</strong>
								</a>
								<a href="" className="text-muted d-block">
									<small>Lorem ipsum dolor sit amet consectetur,
										adipisicing elit. Natus, aspernatur!</small>
								</a>
							</div>
							<a href="" className="text-muted small ms-3 me-2"><strong>Like</strong></a>
							<a href="" className="text-muted small me-2"><strong>Reply</strong></a>
						</div>
					</div>

					<div className="d-flex mb-3">
						<a href="">
							<img src='https://mdbcdn.b-cdn.net/img/new/avatars/5.webp' className="border rounded-circle me-2"
								alt="Avatar" style={{height: "40px"}} />
						</a>
						<div>
							<div className="bg-light rounded-3 px-3 py-1">
								<a href="" className="text-dark mb-0">
									<strong>Rhia Wallis</strong>
								</a>
								<a href="" className="text-muted d-block">
									<small>Et tempora ad natus autem enim a distinctio
										quaerat asperiores necessitatibus commodi dolorum
										nam perferendis labore delectus, aliquid placeat
										quia nisi magnam.</small>
								</a>
							</div>
							<a href="" className="text-muted small ms-3 me-2"><strong>Like</strong></a>
							<a href="" className="text-muted small me-2"><strong>Reply</strong></a>
						</div>
					</div>

					<div className="d-flex mb-3">
						<a href="">
							<img src='https://mdbcdn.b-cdn.net/img/new/avatars/6.webp' className="border rounded-circle me-2"
								alt="Avatar" style={{height: "40px"}} />
						</a>
						<div>
							<div className="bg-light rounded-3 px-3 py-1">
								<a href="" className="text-dark mb-0">
									<strong>Marcie Mcgee</strong>
								</a>
								<a href="" className="text-muted d-block">
									<small>
										Officia asperiores autem sit rerum architecto a
										deserunt doloribus obcaecati, velit ab at, ad
										delectus sapiente! Voluptatibus quaerat suscipit
										in nostrum necessitatibus illum nemo quo beatae
										obcaecati quidem optio fugit ipsam distinctio,
										illo repellendus porro sequi alias perferendis ea
										soluta maiores nisi eligendi? Mollitia debitis
										quam ex, voluptates cupiditate magnam
										fugiat.</small>
								</a>
							</div>
							<a href="" className="text-muted small ms-3 me-2"><strong>Like</strong></a>
							<a href="" className="text-muted small me-2"><strong>Reply</strong></a>
						</div>
					</div>

					<div className="d-flex mb-3">
						<a href="">
							<img src='https://mdbcdn.b-cdn.net/img/new/avatars/10.webp' className="border rounded-circle me-2"
								alt="Avatar" style={{height: "40px"}} />
						</a>
						<div>
							<div className="bg-light rounded-3 px-3 py-1">
								<a href="" className="text-dark mb-0">
									<strong>Hollie James</strong>
								</a>
								<a href="" className="text-muted d-block">
									<small>Voluptatibus quaerat suscipit in nostrum
										necessitatibus</small>
								</a>
							</div>
							<a href="" className="text-muted small ms-3 me-2"><strong>Like</strong></a>
							<a href="" className="text-muted small me-2"><strong>Reply</strong></a>
						</div>
					</div>



				</div>

			</div>
		</section>



	)

}
export default Post;

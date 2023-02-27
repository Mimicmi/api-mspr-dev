
function PostContent({ handleComment }) {

    return (
	<><div>
            <div className="d-flex mb-3">
                <a href="">
                    <img src='https://mdbcdn.b-cdn.net/img/new/avatars/18.webp' className="border rounded-circle me-2"
                        alt="Avatar" style={{ height: "40px" }} />
                </a>
                <div>
                    <a href="" className="text-dark mb-0">
                        <strong>Anna Doe </strong>
                    </a>

                    <a href="#test" className="text-dark mb-0">
                        (My plantos Name)
                    </a>
                    
                    <a className="text-muted d-block" style={{ marginTop: "-6px" }}>
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
        </div><div className="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
                <img src='https://mdbcdn.b-cdn.net/img/new/standard/people/077.webp' className="w-100" />
                <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                </a>
            </div><div className="card-body">

                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <a href="">
                            <i className="fas fa-thumbs-up text-primary"></i>
                            <i className="fas fa-heart text-danger"></i>
                            <span>124 Like</span>
                        </a>
                    </div>
                    <div>
                        <a onClick={() => handleComment()} className="text-muted"> 8 comments </a>
                    </div>
                </div>
            </div></>

    )

}
export default PostContent;

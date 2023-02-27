import React, { useState, useContext} from 'react';
import { UserContext } from '../../../services/UserService';


function PostComment() {

    const { role } = useContext(UserContext);



    const formContent = () => {

        if(role == "ROLE_BOTANIST") {
            return (<div className="d-flex mb-3">
            <a href="">
                <img src='https://mdbcdn.b-cdn.net/img/new/avatars/18.webp' className="border rounded-circle me-2"
                    alt="Avatar" style={{ height: "40px" }} />
            </a>
            <div className="form-outline w-100">
                <textarea className="form-control" id="textAreaExample" rows="2"></textarea>
                <label className="form-label" htmlFor="textAreaExample">Write a comment</label>
            </div>
        </div>)
        }
    }

    return (
        <div>

            {formContent()}

            <div className="d-flex mb-3">
                <a href="">
                    <img src='https://mdbcdn.b-cdn.net/img/new/avatars/8.webp' className="border rounded-circle me-2"
                        alt="Avatar" style={{ height: "40px" }} />
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
                        alt="Avatar" style={{ height: "40px" }} />
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
                        alt="Avatar" style={{ height: "40px" }} />
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
                        alt="Avatar" style={{ height: "40px" }} />
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
    )

}
export default PostComment;

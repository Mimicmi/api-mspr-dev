import Api from "../../../Api"
import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from "../../../services/UserService";

function PostContent({ handleComment, photo }) {

    const [isDelete, setIsDelete] = useState(false);
    const { clientId  } = useContext(UserContext);


    const urlPhoto = () => {
        if (photo.image) {
            return "http://localhost:8090/upload/" + photo.image
        } else {
            return 'https://mdbcdn.b-cdn.net/img/new/avatars/18.webp'
        }
    }

    const deleteButton = () => {
        if(photo.client.id ==clientId ) {
            return (<a onClick={() => {deletePhoto()}} style={{ width: '60%', textAlign: "right" }}>
            Supprimer
        </a>)
        }
    }



    const deletePhoto = () => {
        Api.delete('photos/' + photo.id)
    .then(res => res.data)
    .then(
      (result) => {
        setIsDelete(true)
      },

      (error) => {

      }
    )
        

    }

    if (!isDelete) {
        return (
            <><div>
                <div className="d-flex mb-3">
                    <a href="">
                        <img src='https://mdbcdn.b-cdn.net/img/new/avatars/18.webp' className="border rounded-circle me-2"
                            alt="Avatar" style={{ height: "40px" }} />
                    </a>
                    <div>
                        <a href="" className="text-dark mb-0">
                            <strong>{photo.client.name} </strong>
                        </a>

                        <a href={"/my-plant/" + photo.plant.id} className="text-dark mb-0">
                            ({photo.plant.name})
                        </a>

                        <a className="text-muted d-block" style={{ marginTop: "-6px" }}>
                            <small>10h</small>
                        </a>


                    </div>

                    {deleteButton()}
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
                    <img src={urlPhoto()} className="w-100" />
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
                            <a onClick={() => handleComment()} className="text-muted"> + comments </a>
                        </div>
                    </div>
                </div></>
        )
    } else {
        return <p>Publication supprimée</p>
    }
}
export default PostContent;

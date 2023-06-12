import Api from '../../../Api';

import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../../services/UserService';

function PostComment({ photo_id }) {

    const { userId } = useContext(UserContext);


    const [isLoaded, setIsLoaded] = useState(false);
    const [comments, setComments] = useState([]);

    const [commentToSend, setCommentToSend] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        sendComment();
    }

    useEffect(() => {
        getComments()
    }, [photo_id])


    const getComments = () => {
        Api.get('/comments/photo/' + photo_id)
            .then(res => res.data)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setComments(result);
                },
                (error) => {
                    setIsLoaded(true);
                    console.log(error)
                }
            )
    }

    const sendComment = () => {
        const body = {
            "photo": {
                "id": photo_id
            },
            "user": {
                "id": userId
            },
            "commentDate": new Date().toISOString(),
            "comment": commentToSend
        }

        Api.post('/comments', body)
            .then(res => res.data)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setComments([...comments, result]);
                    setCommentToSend('');

                    getComments();
                },
                (error) => {
                    setIsLoaded(true);
                    console.log(error);
                }
            )
    }

    const formContent = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="d-flex mb-3">
                    <div className="form-outline w-100 d-flex gap-2">
                        <textarea className="form-control" id="textAreaExample" rows="2" value={commentToSend} onChange={e => setCommentToSend(e.target.value)}></textarea>
                        <button class="btn btn-outline-primary" type="submit">Evnoyer</button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div>
            {formContent()}
            {Array.isArray(comments) && comments.map((comment, index) => {
                return (
                    <div className={`d-flex mb-3 ${userId == comment.idUser ? 'justify-content-end' : ''}`} key={index} style={userId == comment.idUser ? { justifyContent: "flex-end" } : {}}>
                        {!(userId == comment.idUser) && (
                            <a>
                                <img
                                    src="https://cdn.onlinewebfonts.com/svg/img_569204.png"
                                    className="border rounded-circle me-2"
                                    alt="Avatar"
                                    style={{ height: "30px" }}
                                />
                            </a>
                        )}
                        <div>
                            <div className="bg-light rounded-3 px-3 py-1">
                                {!(userId == comment.idUser) && (
                                    <p className="text-dark mb-0">
                                        <strong>{comment.user}</strong>
                                    </p>
                                )}
                                <p className="text-muted d-block">
                                    <small>{comment.textBody}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PostComment;

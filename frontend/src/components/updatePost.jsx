import React, { useEffect, useState } from "react";
import { updatePost } from "../services/PostService";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import HomeButton from "./homeButton";

function UpdatePost() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/api/posts/${id}/`)
                if(res){
                    setTitle(res.data.title)
                    setDescription(res.data.description)
                }
            } catch(e){
                console.log("There was an error fetching the post", e)
            }
        }
        getPost()
    }, [id])

    function isDisabled(){
        return title.length === 0 || description.length === 0 || loading;
    }

    async function handleSubmit(){
        setLoading(true)
        await updatePost(id,{title, description})
        setLoading(false)
        navigate("/")
    }

    function buttonText(){
        if(!loading) return 'Submit'
        return 'Loading...'
    }
    return (
        <div>
            <h1>Update Post</h1>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button disabled={isDisabled()} onClick={() => handleSubmit()}>{buttonText()}</button>
            <HomeButton />
        </div>
    )
}

export default UpdatePost;

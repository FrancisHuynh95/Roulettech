import React, { useState } from "react";
import { createPost } from "../services/PostService";
import { useNavigate } from "react-router-dom"
import HomeButton from "./homeButton";

function CreatePost() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    function isDisabled(){
        return title.length === 0 || description.length === 0 || loading;
    }

    async function handleSubmit(){
        setLoading(true)
        await createPost({title, description})
        setLoading(false)
        navigate("/")
    }

    function buttonText(){
        if(!loading) return 'Submit'
        return 'Loading...'
    }
    return (
        <div>
            <h1>Create Post</h1>
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

export default CreatePost;

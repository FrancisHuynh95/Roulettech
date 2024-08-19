import { useNavigate } from "react-router-dom"

function CreateButton(){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/createpost")
    }

    return (
        <button onClick={handleClick}>Create a post</button>
    )
}

export default CreateButton

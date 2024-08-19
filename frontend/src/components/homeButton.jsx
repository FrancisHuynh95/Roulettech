import { useNavigate } from "react-router-dom";

function HomeButton(){
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/')}>Send me Home</button>
    )
}

export default HomeButton;

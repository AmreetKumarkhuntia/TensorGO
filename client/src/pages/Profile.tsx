import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const LoggedIn: Boolean = useSelector((s: any) => s.user.login);
    const navigate: Function = useNavigate();

    if (!LoggedIn) {
        window.alert("You are not logged in.");
        navigate("/home");
    }
    
    return (
        <div className="Profile">
            <div className="container">
                <div className="Title-2">PROFILE</div>
                <div className="content">

                </div>
            </div>
        </div>
    )
}

export default Profile;
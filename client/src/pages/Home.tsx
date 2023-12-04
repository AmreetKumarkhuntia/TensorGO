import { Button } from "@mui/material";
import { HomeLogo } from "../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
    const LoggedIn: Boolean = useSelector((s: any) => s.user.login);

    return (
        <div className="Home">
            <div>
                <div className="Title">
                    TensorGO
                </div>
                <div className="Title-2">
                    Customer Support
                </div>

                {!LoggedIn ? <div className="SubTitle">
                    Login or SignUp to submit feedback <br />
                    <Button variant="contained"><Link to="/Login">LogIn </Link></Button>
                    <Button variant="contained"><Link to="/SignUp">SignUp</Link></Button>
                </div> : ""}
                {LoggedIn ? <Button variant="contained">Submit Feedbacks</Button> : ""}
            </div>
            <img className="Logo" src={HomeLogo} alt="error"></img>
        </div>
    )
}


export default Home;
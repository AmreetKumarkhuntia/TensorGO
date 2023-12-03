import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

const Navbar = () => {
    const LoggedIn: boolean = useSelector((s: any) => s.user.login);

    return (
        <div className="Navbar">
            <div className="Links Logo">Customo</div>

            <div className="Links">
                <div>Home</div>
                <div>About</div>
                <div><Link to="/Feedback">Feedback</Link></div>
                <div><Link to="/Profile">Dashboard</Link></div>
            </div>

            <div className="Links Buttons">
                {!LoggedIn ? <div><Link to="/Login">Login</Link></div> : ""}
                {!LoggedIn ? <div><Link to="/SignUp">SignUp</Link></div> : ""}
                {LoggedIn ? <div className="profile"><Link to="/Profile"><AccountCircle /></Link></div> : ""}
            </div>
        </div>
    )
}

export default Navbar;
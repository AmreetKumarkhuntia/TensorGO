import { TextField, Button } from "@mui/material";
import { updateUser } from "../store/features/userSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const url: string = process.env.REACT_APP_BACKENDURL || "";
    const dispatch: Function = useDispatch();
    const navigate: Function = useNavigate();
    const loggedin: boolean = useSelector((state: any) => state.user.login ? true : false);

    useEffect(() => {
        if (loggedin) {
            navigate('/');
        }
    })

    const update = (e: any) => {
        dispatch(updateUser(e));
    }
    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const HandleLogin = async () => {
        const currUser: {
            email: string,
            password: string
        } = {
            email: email,
            password: password,
        }

        await fetch(`${url}login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currUser),
        }).then((res: any) => {
            return res.json()
        }).then(
            (res) => {
                if(res.status!=="error"||res.status!=="failure")
                update({
                    email: res?.email,
                    name: res?.name,
                    login: true,
                    comments: res?.comments
                })
            }
        ).catch((e) => {
            console.log(e);
        })
    }

    return (
        <div className="FormContainer">
            <div className="form">
                <div className="Title">Login</div>
                <div className="container">
                    <div className="SubTitle">Enter Your Email</div>
                    <TextField className="input" value={email} id="outlined-basic" label="Email" variant="outlined" onChange={handleEmail} />
                    <div className="SubTitle">Password</div>
                    <TextField className="input" value={password} id="outlined-basic" type="password" label="Password" onChange={handlePassword} variant="outlined" />
                    <Button variant="contained" onClick={HandleLogin}>LogIn </Button>
                    <div className="SubTitle">Forgot Password? Login with gmail</div>
                </div>
            </div>
        </div>
    )
}

export default Login;
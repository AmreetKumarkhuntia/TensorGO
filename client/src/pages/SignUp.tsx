import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const LoggedIn: boolean = useSelector((e: any) => e.user.login);
    const navigate: Function = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [checkPass, setCheckPass] = useState<string>("");
    const [name, setName] = useState<string>("");
    const url: string = process.env.REACT_APP_BACKENDURL || "";

    useEffect(() => {
        if (LoggedIn) navigate('/');
    })

    const HandleClick = () => {
        if (password !== checkPass) window.alert("password doesn't match");

        const currUser: {
            email: string,
            password: string
        } = {
            email: email,
            password: password,
        }

        fetch(`${url}signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(currUser),
        }).then((res) => res.json()).then((res) => {
            if (res.status === "success") {
                window.alert("succesfully signed up")
                navigate('/home');
            }
            else {
                window.alert(res.error);
            }
        }).catch((e) => console.log(e))
    }

    return (
        <div className="FormContainer">
            <div className="form">
                <div className="Title">Signup</div>
                <div className="container">
                    <div className="SubTitle">Enter Your Email</div>
                    <TextField className="input" id="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                    <div className="SubTitle">Enter Your Name</div>
                    <TextField className="input" id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" />
                    <div className="SubTitle">Enter Password</div>
                    <TextField className="input" id="outlined-basic" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" variant="outlined" />
                    <div className="SubTitle">Confirm Password</div>
                    <TextField className="input" id="outlined-basic" value={checkPass} onChange={(e) => setCheckPass(e.target.value)} label="Password" type="password" variant="outlined" />
                    <Button variant="contained" onClick={HandleClick}>LogIn </Button>
                    <div className="SubTitle">SignUp with gmail</div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
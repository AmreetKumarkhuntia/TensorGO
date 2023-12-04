import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateUser } from "../store/features/userSlice";
import { CommentType } from "../Types";
import { Button } from "@mui/material";

const Profile = () => {
    const LoggedIn: Boolean = useSelector((s: any) => s.user.login);
    const navigate: Function = useNavigate();
    const user = useSelector((e: any) => e.user);
    const url: string = process.env.REACT_APP_BACKENDURL || "";
    const email: string = useSelector((s: any) => s.user.email);
    const dispatch: Function = useDispatch();
    const comments: Array<CommentType> = useSelector((s: any) => s.user.comments);

    const update = (e: any) => {
        dispatch(updateUser(e));
    }

    useEffect(() => {
        if (!LoggedIn) {
            window.alert("You are not logged in.");
            navigate("/");
        }
        else {
            fetch(`${url}feedback`, {
                method: "GET",
                headers: {
                    "email": email
                }
            }).then(res => res.json()).then((res) => {
                console.log(res);
                if (res?.status === "error") window.alert(res.error);
                else {
                    update({
                        login: true,
                        comments: res.comments
                    })
                }
            })
        }
    })

    const CommentMap = (comment: any) => {
        return (
            <div className="comment SubTitle">
                <div><span className="bold">ID : </span>{comment._id}</div>
                <div><span className="bold">CATEGORY : </span>{comment.category}</div>
                <div><span className="bold">RATING : </span>{comment.rating}</div>
                <div><span className="bold">COMMENT : </span>{comment.comment}</div>
            </div>
        )
    }

    const HandleLogout = () => {

    }

    return (
        <div className="Profile">
            <div className="container">
                <div className="Title-2">PROFILE</div>
                <div className="SubTitle">
                    <span className="bold">NAME :</span> {user.name}<br />
                    <span className="bold">EMAIL :</span> {user.email}<br />
                    <Button variant="contained" onClick={HandleLogout}>Log Out</Button>
                </div>
                <div className="Title-2">FEEDBACKS</div>
                <div className="content">
                    {
                        comments.map(CommentMap)
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;
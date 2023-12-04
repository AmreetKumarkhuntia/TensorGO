import { useEffect, useState } from "react";
import { Select, Button, MenuItem } from "@mui/material";
import { Textarea } from "@mui/joy";

import { Feedbacks, Ratings } from "../constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
    const [Category, setCategory] = useState<string>(Feedbacks[0]);
    const [Rating, setRating] = useState<string>(Ratings[0]);
    const [Comment, setComment] = useState<string>("");
    const email: string = useSelector((s: any) => s.user.email);
    const LoggedIn: boolean = useSelector((s: any) => s.user.login);
    const url: string = process.env.REACT_APP_BACKENDURL || "";
    const navigate = useNavigate();

    const handleCategory = (e: any) => {
        setCategory(e.target.value);
    }

    const handleRating = (e: any) => {
        setRating(e.target.value);
    }

    const handleComment = (e: any) => {
        setComment(e.target.value)
    }

    const HandleSubmit = async () => {
        fetch(`${url}feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                category: Category,
                rating: Rating,
                email: email,
                comment: Comment
            })
        }).then(res => {
            return res.json()
        }).then(res => {
            window.alert(res.status);
        })
    }

    useEffect(() => {
        if (!LoggedIn) {
            window.alert("please login first");
            navigate("/");
        }
    })

    return (
        <div className="FormContainer">
            <div className="form">
                <div className="Title">Enter Your Feedback</div>
                <div className="container">
                    <div className="SubTitle">Category</div>
                    <div>
                        <Select
                            value={Category}
                            id="Category"
                            onChange={handleCategory}
                        >
                            {
                                Feedbacks.map((value: string) => {
                                    return (
                                        <MenuItem key={value} value={value} id={value} >{value}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </div>
                    <div className="SubTitle">Rating</div>
                    <div>
                        <Select
                            value={Rating}
                            id="Ratings"
                            onChange={handleRating}
                        >
                            {
                                Ratings.map((value: string) => {
                                    return (
                                        <MenuItem key={value} value={value} id={value} >{value}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </div>
                    <div className="SubTitle">Comments</div>
                    <div>
                        <Textarea className="textarea" id="Comments" value={Comment} onChange={handleComment}></Textarea>
                    </div>
                    <Button variant="contained" onClick={HandleSubmit}>Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Feedback;
import { useState } from "react";
import { Select, Button, MenuItem } from "@mui/material";
import { Textarea } from "@mui/joy";

import { Feedbacks, Ratings } from "../constants";

const Feedback = () => {
    const [Category, setCategory] = useState<string>(Feedbacks[0]);
    const [Rating, setRating] = useState<string>(Ratings[0]);
    const [Comment, setComment] = useState<string>("");

    const handleCategory = (e: any) => {
        setCategory(e.target.value);
    }

    const handleRating = (e: any) => {
        setRating(e.target.value);
    }

    const handleComment = (e: any) => {
        setComment(e.target.value)
    }

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
                    <Button variant="contained">Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default Feedback;
import React from "react";
import Next from "./next";

const Question = (props) => (
    <div>
        <p>{props.question.question}</p>
            <div>
                    <button>{props.question.answer1}</button>
            </div>
            <div>
                    <button>{props.question.answer2}</button>
            </div>
            <div>
                    <button>{props.question.answer3}</button>
            </div>
            <div>
                    <button>{props.question.answer4}</button>
            </div>
            <div>
                    <Next/>
            </div>
    </div>
)

export default Question;
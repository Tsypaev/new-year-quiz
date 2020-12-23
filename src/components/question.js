import React from "react";
import Next from "./next";

class Question extends React.Component {

    setNextQuestion = async () => {
       this.setState({
            question1: {
                active: false
            },
            question2: {
                active: true
            }
        })
    }

    render() {
        return (
            <div>
                <p>{this.props.question.question}</p>
                <div>
                    <button>{this.props.question.answer1}</button>
                </div>
                <div>
                    <button>{this.props.question.answer2}</button>
                </div>
                <div>
                    <button>{this.props.question.answer3}</button>
                </div>
                <div>
                    <button>{this.props.question.answer4}</button>
                </div>
                <div>
                    <Next setNextQuestion={this.setNextQuestion}/>
                </div>
            </div>
        )
    }
}

export default Question;
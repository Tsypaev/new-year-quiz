import React from "react";
import Info from "./components/info";
import Start from "./components/start";
import Question from "./components/question";

class App extends React.Component {

    state = {
        isStarted: false,
        question1 : {
            active: false,
            question: 'Вопрос1',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question2 : {
            active: false,
            question: 'Вопрос2',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question3 : {
            active: false,
            question: 'Вопрос3',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question4 : {
            active: false,
            question: 'Вопрос4',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question5 : {
            active: false,
            question: 'Вопрос5',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question6 : {
            active: false,
            question: 'Вопрос6',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question7 : {
            active: false,
            question: 'Вопрос7',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question8 : {
            active: false,
            question: 'Вопрос8',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question9 : {
            active: false,
            question: 'Вопрос9',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        },
        question10 : {
            active: false,
            question: 'Вопрос10',
            answer1: 'Ответ1',
            answer2: 'Ответ2',
            answer3: 'Ответ3',
            answer4: 'Ответ4',
        }
    }

    setStartedTrue = async () => {
        this.setState({
            isStarted: true,
            question1: {
                active: true,
                question: this.state.question1.question,
                answer1: this.state.question1.answer1,
                answer2: this.state.question1.answer2,
                answer3: this.state.question1.answer3,
                answer4: this.state.question1.answer4
            }
        })
    }

    render() {
        return (
            <div>
                { !this.state.isStarted &&
                    <div>
                        <div><Info/></div>
                        <div><Start setStartedTrue={this.setStartedTrue}/></div>
                    </div>
                }
                { this.state.question1.active &&
                    <div><Question question={this.state.question1}/></div>
                }
                { this.state.question2.active &&
                <div><Question question={this.state.question2}/></div>
                }
            </div>
        )
    }
}

export default App;
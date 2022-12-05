import React, { useState } from "react";
const Quiz = () => {
    const Arr = [
        {
            question: "What is the Capital of India?",
            answeroption: [
                { answertext: "Mumbai", isCorrect: false },
                { answertext: "Delhi", isCorrect: true },
                { answertext: "Uttarpradesh", isCorrect: false },
                { answertext: "Goa", isCorrect: false }
            ]
        },
        {
            question: "Who is PM of India?",
            answeroption: [
                { answertext: "Amit Shah", isCorrect: false },
                { answertext: "Kejriwal", isCorrect: false },
                { answertext: " Modi", isCorrect: true },
                { answertext: "Rahul Gandhi", isCorrect: false }
            ]
        },
        {
            question: "Who is Father of Computers?",
            answeroption: [
                { answertext: "Napier", isCorrect:false  },
                { answertext: "Babbage", isCorrect: true },
                { answertext: "Pascal", isCorrect: false },
                { answertext: "None", isCorrect: false }
            ]
        },
        {
            question: "Who is CEO of Tesla?",
            answeroption: [
                { answertext: "Tony Stark", isCorrect: false },
                { answertext: "Bill Gates", isCorrect: false },
                { answertext: "Elon Musk", isCorrect: true },
                { answertext: "Jeff Bezos", isCorrect: false }
            ]
        },
        {
            question: "Who won most trophis in IPL?",
            answeroption: [
                { answertext: "Bengalore", isCorrect: false },
                { answertext: "Chennai", isCorrect: false },
                { answertext: "Mumbai", isCorrect: true },
                { answertext: "Kolkata", isCorrect: false }
            ]
        },
        {
            question: "Who is God for cricket?",
            answeroption: [
                { answertext: "Virat", isCorrect: false },
                { answertext: "Rohit", isCorrect: false },
                { answertext: "Sachin", isCorrect: true },
                { answertext: "Dhoni", isCorrect: false }
            ]
        },
        {
            question: "Who is king of fruits?",
            answeroption: [
                { answertext: "Chiku", isCorrect: false },
                { answertext: "Grapes", isCorrect: false },
                { answertext: "Apple", isCorrect: false },
                { answertext: "Mango", isCorrect: true }
            ]
        },
    ]
    const [currQue, nextQue] = useState(0)
    const [score, setscore] = useState(0)
    const [showscore, setshowscore] = useState(false)
    const Event = (isCorrect) => {

        if (isCorrect === true) {
            setscore(score + 1)
        }
        if (currQue < Arr.length - 1) {}
        else {
            setshowscore(true)
            console.log(showscore)
        }
        nextQue(currQue + 1)
    }
    return (<>


        {showscore ? <div className="score-section"><h2 className="score-head">You scored {score} out of {Arr.length}</h2></div> :
        <div className="container">
            <div className="box">
                <h2>Question {currQue + 1}/{Arr.length}</h2>
                <div className="Question-section">
                    <span>{Arr[currQue].question}</span>
                </div>
                <div className="Answer-section">
                    {Arr[currQue].answeroption.map((curr, index) => (
                        <button className="butt" onClick={() => Event(curr.isCorrect)}>{curr.answertext}</button>
                    ))}
                </div>

            </div>
            </div>}

    </>)
}
export default Quiz
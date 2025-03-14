import React, { useState, useEffect } from 'react';
import "../App.css";

const Flashcard = ({ card, onClick, isFlipped }) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");

    // Reset input when the flashcard changes
    useEffect(() => {
        setUserAnswer("");  
        setFeedback("");    
    }, [card]);

    const handleSubmit = () => {
        if (userAnswer.trim().toLowerCase() === card.answer.toLowerCase()) {
            setFeedback("✅ Correct!");
        } else {
            setFeedback("❌ Incorrect! Try again.");
        }
    };

    return (
        <div className="flashcard-wrapper">
            <div className="flashcard-container">
                <div className={`flashcard ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
                    <div className="card-content">{isFlipped ? card.answer : card.question}</div>
                </div>
            </div>

            {/* User Input Section (Now correctly placed below) */}
            <div className="answer-container">
                <input
                    type="text"
                    placeholder="Enter your answer"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit Answer</button>
                {feedback && <p className="feedback">{feedback}</p>}
            </div>
        </div>
    );
};

export default Flashcard;

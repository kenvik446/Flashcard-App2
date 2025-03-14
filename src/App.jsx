import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import Controls from "./components/Controls";
import "./App.css";

const initialFlashcards = [
    { question: "What does HTTP stand for?", answer: "HyperText Transfer Protocol" },
    { question: "What is the time complexity of binary search?", answer: "O(log n)" },
    { question: "Who is known as the father of computer science?", answer: "Alan Turing" },
    { question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
    { question: "What is the main purpose of a compiler?", answer: "To convert source code into machine code" },
    { question: "What is the worst-case time complexity of quicksort?", answer: "O(n^2)" },
    { question: "Which data structure follows LIFO?", answer: "Stack" },
    { question: "What does API stand for?", answer: "Application Programming Interface" },
    { question: "What programming language is primarily used for iOS development?", answer: "Swift" },
    { question: "What does SQL stand for?", answer: "Structured Query Language" },
];

const App = () => {
    const [flashcards, setFlashcards] = useState(initialFlashcards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const handleNext = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    const handlePrev = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1);
    };

    const handleShuffle = () => {
        setFlipped(false);
        setCurrentIndex(0);
        setFlashcards([...flashcards].sort(() => Math.random() - 0.5)); // Shuffle
    };

    return (
        <div className="container">
            <h1>Computer Science Trivia</h1>
            <p>Test your knowledge with these flashcards!</p>
            <p className="total-cards">Total Cards: {flashcards.length}</p>

            <Flashcard
                card={flashcards[currentIndex]}
                onClick={() => setFlipped(!flipped)}
                isFlipped={flipped}
            />

            <Controls onNext={handleNext} onPrev={handlePrev} onShuffle={handleShuffle} />
        </div>
    );
};

export default App;

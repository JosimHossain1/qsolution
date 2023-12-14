"use client";

import React, { useState, useEffect } from "react";

const questionsData = [
  {
    id: 1,
    question: "What is the capital of Bangladesh?",
    options: ["Dhaka", "Chittagong", "Rajshahi", "Sylhet"],
    correctAnswer: "Dhaka",
    timeLimit: 2 * 60, // Time limit for this question in seconds
  },
  {
    id: 2,
    question: "Which river is the longest in Bangladesh?",
    options: ["Ganges (Padma)", "Jamuna (Brahmaputra)", "Meghna", "Teesta"],
    correctAnswer: "Jamuna (Brahmaputra)",
    timeLimit: 2 * 60, // Time limit for this question in seconds
  },
  // Add more questions here...
];

const App = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(null);
  const [timerInterval, setTimerInterval] = useState(null);
  const [totalMarks, setTotalMarks] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [passOrFail, setPassOrFail] = useState("");

  const startExam = () => {
    setExamStarted(true);
    const questionTimeLimit = questionsData[currentQuestionIndex].timeLimit;
    setRemainingTime(questionTimeLimit);

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          handleTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setTimerInterval(interval);
  };

  const handleTimeUp = () => {
    handleFinishExam();
  };

  const handleSelectAnswer = (questionId, answer) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answer });
  };

  const handleFinishExam = () => {
    clearInterval(timerInterval);
    const answeredQuestions = Object.keys(selectedAnswers).length;
    const totalQuestions = questionsData.length;

    let marks = 0;
    let correct = 0;
    let wrong = 0;

    questionsData.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.id];
      if (selectedAnswer === question.correctAnswer) {
        marks++;
        correct++;
      } else if (selectedAnswer) {
        marks--;
        wrong++;
      }
    });

    setTotalMarks(marks);
    setCorrectAnswers(correct);
    setWrongAnswers(wrong);

    if (answeredQuestions === totalQuestions) {
      const passThreshold = Math.ceil(totalQuestions * 0.33);
      if (correct >= passThreshold) {
        setPassOrFail("Pass");
      } else {
        setPassOrFail("Fail");
      }
      setShowResult(true);
    } else {
      setShowConfirmation(true);
    }
  };

  const handleConfirmFinish = () => {
    const passThreshold = Math.ceil(questionsData.length * 0.33);
    if (correctAnswers >= passThreshold) {
      setPassOrFail("Pass");
    } else {
      setPassOrFail("Fail");
    }
    setShowResult(true);
    setShowConfirmation(false);
  };

  useEffect(() => {
    if (examStarted) {
      startExam();
    }
  }, [currentQuestionIndex, examStarted, startExam]);

  return (
    <div className="container mx-auto p-4 text-white text-center">
      <h1 className="text-4xl font-semibold mb-4">বহুনির্বাচনি প্রশ্ন</h1>
      {!showResult && !showConfirmation && !examStarted && (
        <button
          onClick={startExam}
          className="border bg-white p-2 rounded text-black font-semibold"
        >
          পরিক্ষা শুরু করুন
        </button>
      )}
      {(showResult || showConfirmation) && (
        <div>
          <p>
            Total Marks: {totalMarks} | Correct Answers: {correctAnswers} |
            Wrong Answers: {wrongAnswers} | Pass/Fail: {passOrFail}
          </p>
        </div>
      )}
      {examStarted && !showResult && !showConfirmation && (
        <div>
          <div className="fixed top-0 right-0 p-4 bg-white text-black rounded-md shadow-md">
            Time Left: {Math.floor(remainingTime / 60)}:{remainingTime % 60}{" "}
            seconds
          </div>
          <div className="grid grid-cols-3">
            {questionsData.map((question, index) => (
              <div key={question.id} className="mb-4 ">
                <div>
                  <h2 className="text-lg font-semibold">{question.question}</h2>
                  <ul className="grid grid-cols-2">
                    {question.options.map((option, optionIndex) => (
                      <li key={optionIndex}>
                        <label>
                          <input
                            type="radio"
                            name={`answer_${question.id}`}
                            value={option}
                            onChange={() =>
                              handleSelectAnswer(question.id, option)
                            }
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {!showResult && !showConfirmation && (
            <button
              onClick={handleFinishExam}
              className="bg-red-500 p-2 text-xl rounded-md poppins"
            >
              Finish Exam
            </button>
          )}
        </div>
      )}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-300 bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-md text-center text-black">
            <p>
              You have not answered all the questions. Are you sure you want to
              finish the exam?
            </p>
            <button onClick={handleConfirmFinish}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

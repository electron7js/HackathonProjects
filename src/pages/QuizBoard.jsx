import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizBoard.css";
import { quizData } from "../quizes/questions";
import axios from "axios";


function QuizBoard() {

  const baseUrl="http://192.168.137.1:5000";
    const fetchAllQuizzes = async () => {
        try {
            const response = await axios.get(baseUrl+'/getAllQuizzes');
            if (response.status === 200) {
                console.log("Quizzes fetched successfully:", response.data);
                setQuizData(response.data)
                return response.data; // Handle the JSON response here

            } else {
                console.error("Unexpected response status:", response.status);
            }
        } catch (error) {
            console.error("Error fetching quizzes:", error.message);
        }
    };

// Call the function
useEffect(() => {
  fetchAllQuizzes();
}, []);


  const navigate = useNavigate();
  const [quizData,setQuizData] = useState([]);

  const handleQuizSelect = (id) => {
    navigate(`/QuizBoard/quiz/${id}`);
  };

  return (
    <div className="quiz-board">
     <h1 style={{color: "black", fontSize: "1.5rem",fontWeight: "bold",}}> <u>Quiz Topics</u>
     </h1>
      <div className="quiz-grid">
        {quizData.map((quiz) => (
          <div
            key={quiz.id}
            className="course-item"
            onClick={() => handleQuizSelect(quiz.quiz_id)}
          >
            <h2 className="title">{quiz.quiz_name}</h2>
            <p>Quiz {quiz.quiz_id + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizBoard;

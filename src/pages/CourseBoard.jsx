import React from "react";
import "./CourseBoard.css";
import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
function CourseBoard() {
  return (
    <div className="course-board">
      <section className="list-section">
        <h2 style={{color: "black", fontSize: "1.5rem",fontWeight: "bold",}}>Courses</h2>
        <div className="course-list">
          <Link to='/courseboard/banking' className="course-item" style={{ textDecoration: 'none' }}>
            <h3>Understanding Banking</h3>
            <p>As the fundamental pillar of modern economy, one must be well versed with the workings of banking system.</p>
          </Link>
          <Link to='/courseboard/typesofbank' className="course-item" style={{ textDecoration: 'none' }}>
            <h3>Banking in Nepal</h3>
            <p>A discussion about various types of banks in nepal</p>
          </Link>
          <Link to='/courseboard/centralbanks' className="course-item" style={{textDecoration:'none'}}>
            <h3>Central Banks</h3>
            <p>Learn about the role of central banks in the economy</p>
          </Link>
          <Link to='/courseboard/cheques' className="course-item" style={{textDecoration:'none'}}>
            <h3>Understanding Cheques and their types</h3>
            <p>Learn about the different types of cheques and their uses</p>
          </Link>
          <Link to='/courseboard/interest' className="course-item" style={{textDecoration:'none'}}>
            <h3>Understanding Interest: Simple and Compound</h3>
            <p>Learn about simple and compound interest! They are the basics of finance</p>
          </Link>
          <Link to='/courseboard/loans' className="course-item" style={{textDecoration:'none'}}>
            <h3>Understanding Bank Loans</h3>
            <p>Learn about the different types of bank loans and their uses</p>
          </Link>
          <Link to='/courseboard/creditscore' className="course-item" style={{textDecoration:'none'}}>
            <h3>Understanding Credit Scores</h3>
            <p>Learn about credit scores and their importance in the financial world</p>
          </Link>
          <Link to='/courseboard/stockbasics' className="course-item" style={{textDecoration:'none'}}>
            <h3>Understanding the Basics of Stocks and Stock Trading</h3>
            <p>Learn about the basics of stocks and stock trading</p>
          </Link>
          <Link to='/courseboard/trading' className="course-item" style={{textDecoration:'none'}}>
            <h3>Stock Trading: A Beginner's Guide</h3>
            <p>Learn about the basics of stock trading</p>
          </Link>
          <Link to='/courseboard/candels' className="course-item" style={{textDecoration:'none'}}>
            <h3>Understanding Candlestick Charts and Patterns</h3>
            <p>Learn about candlestick charts and patterns</p>
          </Link>


        </div>
      </section>
    </div>
  );
}

export default CourseBoard;

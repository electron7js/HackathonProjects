import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
// import Quiz from "./pages/Quiz";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import QuizBoard from "./pages/QuizBoard";
import CourseBoard from "./pages/CourseBoard";
import Profile from "./pages/User";
import ChequeForm from "./pages/Cheque";
import BankingInfo from "./cources/banking";
import BankingInNepal from "./cources/banks";
import ChequeInfo from "./cources/cheques";
import CentralBanksInfo from "./cources/centralbanks";
import SIPCalculator from "./pages/SIPCalculator";
import StockBasics from "./cources/stocksbasicinfo";
import BankLoans from "./cources/loans";
import StockTradingBasics from "./cources/trading";
import CandlestickBasics from "./cources/candels";
import Interest from "./cources/intrest";
import CreditScoreArticle from "./cources/creditscore";
import QuizPlatform from "./quizes/Quiz_platform";
import Logout from "../logout";
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Home Page */}
          <Route index element={<Dashboard />} />

          {/* Quiz Page */}
          {/* <Route path="quiz" element={<Quiz />} /> */}

          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="sipcalculator" element={<SIPCalculator />} />

          {/* Register Page */}
          <Route path="Register" element={<Register />} />

          {/* Login Page */}
          <Route path="Login" element={<Login />} />
          <Route path="Logout" element={<Logout />} />

          {/* Profile Page */}
          <Route path="Profile" element={<Profile />} />

                    <Route path="QuizBoard" element={<QuizBoard />} />
                    <Route path="QuizBoard/quiz/:id" element={<QuizPlatform />} />
                    <Route path="CourseBoard" element={<CourseBoard />} />

          <Route path="Cheque" element={<ChequeForm />} />

          <Route path="CourseBoard/Banking" element={<BankingInfo />} />
          <Route path="CourseBoard/TypesOfBank" element={<BankingInNepal />} />
          <Route path="CourseBoard/Cheques" element={<ChequeInfo />} />
          <Route
            path="CourseBoard/CentralBanks"
            element={<CentralBanksInfo />}
          />
          <Route path="CourseBoard/StockBasics" element={<StockBasics />} />
          <Route path="CourseBoard/loans" element={<BankLoans />} />
          <Route path="CourseBoard/Trading" element={<StockTradingBasics />} />
          <Route path="CourseBoard/Candels" element={<CandlestickBasics />} />
          <Route path="CourseBoard/Interest" element={<Interest />} />
          <Route
            path="CourseBoard/CreditScore"
            element={<CreditScoreArticle />}
          />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

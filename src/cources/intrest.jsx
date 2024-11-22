import React from "react";
import "./intrest.css";
import { Link } from "react-router-dom";

import "./banking.css";
const Interest = () => {
  return (
    <div className="banking-info-container">
      <h1 className="title">Understanding Interest: Simple and Compound</h1>

      <p className="intro">
        Interest is the cost of borrowing money or the reward for depositing
        money, expressed as a percentage of the principal amount. It plays a
        crucial role in banking and finance, influencing loans, savings, and
        investments.
      </p>

      <h2>Simple Interest</h2>
      <p>
        Simple interest is calculated on the principal amount alone, making it
        straightforward and predictable. It is commonly used in short-term loans
        or fixed deposits.
      </p>
      <img
        src="/interest.jpg"
        alt="interest"
        style={{ width: "60vh", display: "block", justifySelf: "center" }}
      />
      <p>
        <strong>Formula:</strong> <code>SI = (P × R × T) / 100</code>
      </p>
      <ul>
        <li>
          <strong>P:</strong> Principal amount (initial money borrowed or
          invested).
        </li>
        <li>
          <strong>R:</strong> Rate of interest (annual percentage).
        </li>
        <li>
          <strong>T:</strong> Time period (in years).
        </li>
      </ul>
      <p>
        <strong>Example:</strong> If you borrow $1,000 at a 5% interest rate for
        3 years, the simple interest will be:
        <code>(1000 × 5 × 3) / 100 = $150</code>.
      </p>

      <h2>Compound Interest</h2>
      <p>
        Compound interest is calculated on the principal amount and the
        accumulated interest from previous periods. This makes it more powerful
        over time, as it generates interest on interest.
      </p>
      <p>
        <strong>Formula:</strong> <code>CI = P × (1 + R/100) ^ T - P</code>
      </p>
      <ul>
        <li>
          <strong>P:</strong> Principal amount.
        </li>
        <li>
          <strong>R:</strong> Rate of interest (annual percentage).
        </li>
        <li>
          <strong>T:</strong> Time period (in years).
        </li>
      </ul>
      <p>
        <strong>Example:</strong> If you invest $1,000 at a 5% interest rate
        compounded annually for 3 years, the compound interest will be:
        <code>1000 × (1 + 5/100)^3 - 1000 = $157.63</code>.
      </p>

      <h2>Key Differences Between Simple and Compound Interest</h2>
      <ul>
        <li>
          <strong>Calculation:</strong> Simple interest is calculated on the
          principal only, while compound interest includes accumulated interest.
        </li>
        <li>
          <strong>Growth:</strong> Compound interest grows faster than simple
          interest due to compounding.
        </li>
        <li>
          <strong>Applications:</strong> Simple interest is used in short-term
          loans or fixed deposits, while compound interest is prevalent in
          long-term loans, savings accounts, and investments.
        </li>
      </ul>

      <h2>Why Is Interest Important?</h2>
      <p>
        Interest impacts both borrowers and savers, shaping financial decisions.
        For borrowers, understanding the type of interest influences the cost of
        loans. For savers and investors, compound interest offers exponential
        growth, making it a key factor in wealth creation.
      </p>

      <h2>Conclusion</h2>
      <p>
        Both simple and compound interest have significant roles in personal and
        business finance. While simple interest provides predictability,
        compound interest offers the power of exponential growth, making it
        essential to understand how each works to make informed financial
        decisions.
      </p>
      <section>
        <h2>Conclusion</h2>
        <p>
          Both simple and compound interest have significant roles in personal
          and business finance. While simple interest provides predictability,
          compound interest offers the power of exponential growth, making it
          essential to understand how each works to make informed financial
          decisions.
        </p>
      </section>
      <button
        style={{
          fontSize: "larger",
          fontWeight: "bolder",
          textDecoration: "none",
          width: "50%",
          color: "white",
          backgroundColor: "blue",
          padding: "5px",
        }}
      >
        <Link
          to="/sipcalculator"
          style={{ textDecoration: "none", color: "white" }}
        >
          {" "}
          Lets move to SIP calculator
        </Link>
      </button>
    </div>
  );
};

export default Interest;

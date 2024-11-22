import React, { useState } from "react";
import "./SIPCalculator.css";

function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [annualRate, setAnnualRate] = useState(6);
  const [years, setYears] = useState(10);
  const [maturityValue, setMaturityValue] = useState(0);

  // State for sliders
  const [investedAmount, setInvestedAmount] = useState(0);
  const [futureValue, setFutureValue] = useState(0);

  // Function to calculate SIP maturity value
  const calculateSIP = () => {
    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;
    const maturity =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    setMaturityValue(maturity.toFixed(2));
  };

  // Function to calculate future value for slider
  const calculateFutureValue = (amount) => {
    const months = years * 12;
    const monthlyRate = annualRate / 12 / 100;
    const maturity =
      amount *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
    setFutureValue(maturity.toFixed(2));
  };

  return (
    <div className="sip-calculator">
      <header className="header">
        <h1>SIP Calculator</h1>
      </header>

      <section className="info-section">
        <p>
          Remember Investing growth is nearly like exponential growth, so start
          investing early
        </p>
        <figure>
          <img src="compound_interest.png" style={{ width: "75%" }}></img>
        </figure>
      </section>

      <section className="input-section">
        <label>
          Monthly Investment (रु):
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          />
        </label>
        <label>
          Expected Annual Return Rate (%):
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(Number(e.target.value))}
          />
        </label>
        <label>
          Investment Duration (Years):
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </label>
        <button onClick={calculateSIP}>Calculate</button>
      </section>

      {maturityValue > 0 && (
        <section className="result-section">
          <h2>Estimated Maturity Value: रु{maturityValue}</h2>
        </section>
      )}

      <section className="slider-section">
        <h2>Interactive Investment Slider</h2>
        <div className="slider-group">
          <label>
            Amount Invested Every Month (रु):
            <input
              type="range"
              min="100"
              max="50000"
              step="100"
              value={investedAmount}
              onChange={(e) => {
                setInvestedAmount(Number(e.target.value));
                calculateFutureValue(Number(e.target.value));
              }}
            />
          </label>
          <p>रु{investedAmount}</p>
        </div>
        <div className="slider-group">
          <label>
            Amount After 10 Years (रु):
            <input
              type="range"
              min="0"
              max="2000000"
              step="1000"
              value={futureValue}
              readOnly
            />
          </label>
          <p>रु{futureValue}</p>
        </div>
      </section>
    </div>
  );
}

export default SIPCalculator;

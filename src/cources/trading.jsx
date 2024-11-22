import React from "react";
import { Link } from "react-router-dom";
import "./banking.css";
const StockTradingBasics = () => {
  return (
    <div className="banking-info-container">
      <h1 className="title">Stock Trading: A Beginner's Guide</h1>
      <section>
        <h2>What is Stock Trading?</h2>
        <p className="intro">
          Stock trading involves buying and selling shares of publicly listed
          companies. The goal of trading is to capitalize on price movements,
          either short-term or long-term, depending on the trading strategy.
        </p>
        <p className="intro">
          Unlike long-term investing, stock trading focuses on timing the
          market to achieve gains. This requires understanding the stock market,
          its patterns, and associated risks.
        </p>
      </section>

      <section>
        <h2>Key Terms in Stock Trading</h2>
        <ul>
          <li>
            <strong>Stock:</strong> A share of ownership in a company.
          </li>
          <li>
            <strong>Bid and Ask:</strong> The bid is the highest price a buyer
            is willing to pay for a stock, while the ask is the lowest price a
            seller is willing to accept.
          </li>
          <li>
            <strong>Spread:</strong> The difference between the bid and ask
            prices. A smaller spread indicates higher market liquidity.
          </li>
          <li>
            <strong>Volume:</strong> The number of shares traded during a
            specific period, reflecting the stock’s activity level.
          </li>
          <li>
            <strong>Market Order:</strong> An order to buy or sell a stock
            immediately at the current market price.
          </li>
          <li>
            <strong>Limit Order:</strong> An order to buy or sell a stock at a
            specific price or better.
          </li>
          <li>
            <strong>Volatility:</strong> A measure of how much a stock's price
            fluctuates over time.
          </li>
          <li>
            <strong>Day Trading:</strong> The practice of buying and selling
            stocks within the same trading day.
          </li>
        </ul>
      </section>

      <section>
        <h2>Types of Stock Trading</h2>
        <ul>
          <li>
            <strong>Scalping:</strong> Making quick trades to profit from small
            price changes.
          </li>
          <li>
            <strong>Momentum Trading:</strong> Focusing on stocks showing strong
            price trends or momentum.
          </li>
          <li>
            <strong>Position Trading:</strong> Holding stocks for longer
            periods, from weeks to months, based on trends.
          </li>
        </ul>
      </section>

      <section>
        <h2>Importance of Risk Management</h2>
        <p className="intro">
          Stock trading involves substantial risk. Managing your investments
          wisely by setting stop-loss orders, diversifying your portfolio, and
          avoiding emotional decisions can help minimize losses.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p className="intro">
          Stock trading offers significant potential for profit but requires
          knowledge, discipline, and risk management. By understanding the
          fundamentals and key terms, beginners can start their trading journey
          with confidence.
        </p>
      </section>
    </div>
  );
};

export default StockTradingBasics;

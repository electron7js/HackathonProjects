import React from "react";
import { Link } from "react-router-dom";
import "./banking.css";
const StockBasics = () => {
  return (
    <div className="banking-info-container">
      <h1 className="title">Understanding the Basics of Stocks and Stock Trading</h1>
      <section>
        <h2>What are Stocks?</h2>
        <img
          src="/stock-cake.jpg"
          alt="stock-cake"
          className="responsive-image"
          loading="lazy"
          style={{ height: "50vh", display: "block", justifySelf: "center" }}
        />
        <p className="intro">
          Stocks represent ownership in a company. When you purchase a stock,
          you own a share of the company’s assets and earnings. Stocks are
          typically categorized into two main types:
        </p>
        <ul>
          <li>
            <strong>Common Stocks:</strong> These provide voting rights and
            potential dividends based on company performance.
          </li>
          <li>
            <strong>Preferred Stocks:</strong> These offer fixed dividends and
            are prioritized over common stocks in case of bankruptcy.
          </li>
        </ul>
      </section>

      <section>
        <h2>What is a Stock Market?</h2>
        <p className="intro">
          The stock market is a platform where buyers and sellers trade shares
          of publicly listed companies. It's divided into two main categories:
        </p>
        <ul>
          <li>
            <strong>Primary Market:</strong> Where companies issue new stocks
            through initial public offerings (IPOs).
          </li>
          <li>
            <strong>Secondary Market:</strong> Where investors buy and sell
            stocks among themselves.
          </li>
        </ul>
        <p className="intro">
          Examples of major stock markets include the New York Stock Exchange
          (NYSE) and Nasdaq.
        </p>
      </section>
      <img
        src="/stock-bonds.jpg"
        alt="stock-bonds"
        className="responsive-image"
        loading="lazy"
        style={{ height: "50vh", display: "block", justifySelf: "center" }}
      />
      <section>
        <h2>How Does Stock Trading Work?</h2>
        <p className="intro">
          Stock trading involves buying and selling shares to capitalize on
          price movements. Trading can be done through:
        </p>
        <ul>
          <li>
            <strong>Day Trading:</strong> Buying and selling stocks within the
            same day, often using short-term price strategies.
          </li>
          <li>
            <strong>Swing Trading:</strong> Holding stocks for a few days or
            weeks to capitalize on price trends.
          </li>
          <li>
            <strong>Long-Term Investing:</strong> Holding stocks for years to
            benefit from compounding returns and dividends.
          </li>
        </ul>
      </section>

      <section>
        <h2>Why Invest in Stocks?</h2>
        <p className="intro">
          Stocks offer the potential for higher returns compared to traditional
          savings options. Investors gain through:
        </p>
        <ul>
          <li>
            <strong>Capital Gains:</strong> Profit made from selling stocks at a
            higher price than their purchase price.
          </li>
          <li>
            <strong>Dividends:</strong> A portion of a company's profits
            distributed to shareholders.
          </li>
        </ul>
      </section>

      <section>
        <h2>Risks of Stock Trading</h2>
        <p className="intro">
          Stock trading carries risks, including market volatility, economic
          downturns, and company-specific challenges. Diversification and
          research can help mitigate these risks.
        </p>
      </section>
    </div>
  );
};

export default StockBasics;

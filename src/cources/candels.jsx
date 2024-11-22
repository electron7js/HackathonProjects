import React from "react";
import "./banking.css";

const CandlestickBasics = () => {
  return (
    <div className="banking-info-container">
      <h1 className="title">Understanding Candlestick Charts and Patterns</h1>
      <img
        src="/candelstick-anatomy.jpg"
        alt="Anatomy of a candlestick"
        className="responsive-image"
        loading="lazy"
        style={{ height: "50vh", display: "block", justifySelf: "center" }}
      />
      <section>
        <h2>What Are Candlestick Charts?</h2>
        <p>
          Candlestick charts are a popular financial chart used to represent the
          price movements of an asset, such as a stock or cryptocurrency, over a
          specific time period. Each candlestick provides information about the
          opening, closing, high, and low prices during the chosen time frame.
          Traders rely on candlestick charts to analyze market trends and make
          informed trading decisions.
        </p>
      </section>

      <section>
        <h2>Structure of a Candlestick</h2>
        <ul>
          <li>
            <strong>Body:</strong> Represents the range between the opening and
            closing prices.
          </li>
          <li>
            <strong>Wick (or Shadow):</strong> The thin lines above and below
            the body that show the highest and lowest prices during the time
            period.
          </li>
          <li>
            <strong>Color:</strong> A green (or white) candle indicates the
            closing price is higher than the opening price (bullish), while a
            red (or black) candle indicates the closing price is lower than the
            opening price (bearish).
          </li>
        </ul>
      </section>

      <section>
        <h2>Basic Candlestick Patterns</h2>
        <p>Here are some common candlestick patterns traders use to predict trends:</p>
        <ul>
          <li>
            <strong>Doji:</strong> A candle with a small body and long wicks,
            indicating market indecision. It can signal a potential reversal or
            continuation of the trend.
          </li>
          <li>
            <strong>Hammer:</strong> A small body with a long lower wick,
            appearing after a downtrend, signaling a potential reversal.
          </li>
          <li>
            <strong>Shooting Star:</strong> A small body with a long upper wick,
            appearing after an uptrend, signaling a potential reversal.
          </li>
          <li>
            <strong>Bullish Engulfing:</strong> A green candle completely
            engulfs the previous red candle, signaling a potential upward
            reversal.
          </li>
          <li>
            <strong>Bearish Engulfing:</strong> A red candle completely engulfs
            the previous green candle, signaling a potential downward reversal.
          </li>
        </ul>
      </section>
      <img
        src="/candelsticks-patterns.png"
        alt="Candlestick Patterns"
        className="responsive-image"
        loading="lazy"
        style={{ height: "50vh", display: "block", justifySelf: "center" }}
      />
      <section>
        <h2>Trends in Candlestick Charts</h2>
        <p>Candlestick charts reveal three primary trends:</p>
        <ul>
          <li>
            <strong>Uptrend (Bullish):</strong> A series of higher highs and
            higher lows, indicating increasing prices.
          </li>
          <li>
            <strong>Downtrend (Bearish):</strong> A series of lower highs and
            lower lows, indicating decreasing prices.
          </li>
          <li>
            <strong>Sideways Trend (Consolidation):</strong> Prices move within
            a narrow range, showing market indecision.
          </li>
        </ul>
      </section>

      <section>
        <h2>How to Read Candlestick Patterns</h2>
        <p>
          Reading candlestick patterns involves understanding the interplay
          between individual candles and their context within broader market
          trends:
        </p>
        <ul>
          <li>
            Look for patterns like Doji, Hammer, or Engulfing candles that
            indicate reversals or continuations.
          </li>
          <li>
            Combine candlestick analysis with other technical tools like moving
            averages or RSI for better accuracy.
          </li>
          <li>
            Use candlestick trends to identify support and resistance levels.
          </li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Candlestick charts are invaluable tools for traders, offering insights
          into price action and market sentiment. By mastering candlestick
          patterns and their implications, traders can enhance their ability to
          predict market movements and make informed trading decisions.
        </p>
      </section>
    </div>
  );
};

export default CandlestickBasics;
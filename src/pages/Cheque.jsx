import React, { useState, useRef, useEffect } from "react";
import "./ChequeForm.css";

function Cheque() {
  const [chequeData, setChequeData] = useState({
    payee: "",
    amount: "",
    amountInWords: "",
    date: new Date().toISOString().split("T")[0],
  });

  const canvasRef = useRef(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDrawing, setIsDrawing] = useState(false); // State to trigger canvas drawing

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChequeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    const { payee, amount, amountInWords, date } = chequeData;
    if (!payee) {
      setErrorMessage("Payee name is required.");
      return false;
    }
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setErrorMessage("Valid amount is required.");
      return false;
    }
    if (!amountInWords) {
      setErrorMessage("Amount in words is required.");
      return false;
    }
    if (!date) {
      setErrorMessage("Date is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) {
      alert("Please fill out all fields.");
      return;
    }
    setPreviewVisible(true); // Trigger rendering of the canvas
    setErrorMessage("");
    setIsDrawing(true); // Trigger the drawing logic
  };

  useEffect(() => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) {
      setErrorMessage("Canvas element not found.");
      return;
    }

    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = "/preview.jpg"; // Ensure the image path is correct

    image.onload = () => {
      canvas.width = image.width || 800;
      canvas.height = image.height || 400;

      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

      ctx.font = "20px Arial";
      ctx.fillStyle = "black";

      // Add cheque details
      ctx.fillText(chequeData.payee || "Payee Name", 155, 100);
      ctx.fillText(`₹ ${chequeData.amount || "0.00"}`, 600, 140);
      ctx.fillText(chequeData.amountInWords || "Amount in words", 140, 145);
      const dateStr = chequeData.date
        ? new Date(chequeData.date)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "")
        : "";
      const letterSpacing = 14; // 1.5px gap for each letter
      let xPos = 540;

      for (let i = 0; i < dateStr.length; i++) {
        ctx.fillText(dateStr[i], xPos, 52);
        xPos += ctx.measureText(dateStr[i]).width + letterSpacing;
      }

      setIsDrawing(false); // Reset drawing state
    };

    image.onerror = () => {
      setErrorMessage(
        "Failed to load cheque template image. Please check the file path."
      );
      setIsDrawing(false); // Reset drawing state
    };
  }, [isDrawing, chequeData]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "cheque.png";
      link.click();
    }
  };

  const handleClear = () => {
    setChequeData({
      payee: "",
      amount: "",
      amountInWords: "",
      date: new Date().toISOString().split("T")[0],
    });
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setPreviewVisible(false);
    setErrorMessage("");
  };

  return (
    <div className="cheque-container">
      <h1 className="cheque-title">Cheque Filling Simulator</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="form-container">
        {/* Input Fields */}
        <div className="form-group">
          <label>Pay to</label>
          <input
            type="text"
            name="payee"
            value={chequeData.payee}
            onChange={handleChange}
            placeholder="Enter payee name"
          />
        </div>
        <div className="form-group">
          <label>Amount (₹)</label>
          <input
            type="text"
            name="amount"
            value={chequeData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </div>
        <div className="form-group">
          <label>Amount in words</label>
          <input
            type="text"
            name="amountInWords"
            value={chequeData.amountInWords}
            onChange={handleChange}
            placeholder="Enter amount in words"
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={chequeData.date}
            onChange={handleChange}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {previewVisible && (
        <div className="canvas-container">
          <canvas ref={canvasRef} style={{ border: "1px solid #000" }}></canvas>
          <div className="canvas-controls">
            <button onClick={handleDownload}>Download</button>
            <button onClick={handleClear}>Clear</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cheque;

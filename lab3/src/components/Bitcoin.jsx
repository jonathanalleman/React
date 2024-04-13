import React, { useState, useEffect } from "react";
import { useEmojiContext } from "../context/EmojiProvider"; 

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinRate, setBitCoinRate] = useState("");
  const { emoji, handlePunchInFace } = useEmojiContext(); 

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
      .then((response) => response.json())
      .then((data) => {
        setBitCoinRate(data.bitcoin[currency.toLowerCase()]);
      });
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Rate:</strong> {bitcoinRate || "Fetching..."} {emoji} 
      </div>
      <button onClick={handlePunchInFace}>Toggle Emoji</button>
    </div>
  );
}

export default BitcoinRates;

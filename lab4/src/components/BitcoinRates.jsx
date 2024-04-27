import { useState } from "react"; 

import { useData } from "../hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]);

const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, currency)
const btcPrice = data ? data.bitcoin[currency.toLowerCase()] : 0



const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
return (
<div className="BitcoinRates componentBox">
<h3>Bitcoin Exchange Rate</h3>
<label>Choose currency:
<select value={currency} onChange={e => setCurrency(e.target.value)}>
{options}
</select>
</label>
<div> 1 BTC is worth {btcPrice} {currency} </div>
</div>
)
}
export default BitcoinRates
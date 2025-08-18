import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Dark Glass Card */}
      <div className="w-full max-w-md mx-auto p-6 rounded-3xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">
           Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          {/* From InputBox */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            className="mb-4"
          />

          {/* Swap Button */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white font-medium shadow-lg hover:scale-105 transition-transform duration-200"
            >
              🔄 Swap
            </button>
          </div>

          {/* To InputBox */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
            className="mb-4"
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full py-3 px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-700 to-indigo-700 shadow-xl hover:scale-105 transition-transform duration-200"
          >
            Convert {from.toUpperCase()} ➝ {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;

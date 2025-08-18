import React, { useId } from "react";
import countryList from "./countryList";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  const countryCode = countryList[selectCurrency.toUpperCase()];

  return (
    <div
      className={`flex flex-col p-5 rounded-3xl bg-gray-900/60 backdrop-blur-lg border border-gray-700 shadow-xl ${className} transition-all hover:scale-105 duration-300`}
    >
      {/* Label */}
      <label
        htmlFor={amountInputId}
        className="text-white/70 font-semibold mb-3 tracking-wide"
      >
        {label}
      </label>

      {/* Input + Select */}
      <div className="flex gap-4 items-center">

        {/* Amount Input */}
        <input
          id={amountInputId}
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className={`
            w-2/3 px-5 py-3 rounded-2xl bg-white/10 text-white placeholder-white/50
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition
          `}
        />

        {/* Flag Image */}
        <div className="w-12 h-9 flex-shrink-0">
          {countryCode ? (
            <img
              src={`https://flagsapi.com/${countryCode}/flat/64.png`}
              alt={selectCurrency}
              className="w-full h-full rounded-md border border-white/40 shadow-sm object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-600 rounded-full animate-pulse" />
          )}
        </div>

        {/* Currency Select */}
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className={`
            w-1/3 px-4 py-2 rounded-2xl bg-white/10 text-white cursor-pointer 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 transition
          `}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency} className="text-gray-900">
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

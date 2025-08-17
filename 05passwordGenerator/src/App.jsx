import { useState, useCallback, useEffect, useRef } from "react"
import { motion as Motion } from "framer-motion"
import toast, { Toaster } from "react-hot-toast"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 101)
    window.navigator.clipboard.writeText(password)

    toast.success("Password Copied ", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
  }, [password])

  const getStrength = () => {
    let strength = 0
    if (length >= 8) strength++
    if (numberAllowed) strength++
    if (charAllowed) strength++
    return ["Very Weak", "Weak", "Medium", "Strong"][strength] || "Very Weak"
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <Motion.div
      className="w-full max-w-md mx-auto shadow-xl rounded-2xl px-6 py-8 my-10 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Toaster position="top-center" />

      <h1 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
        🔑 Password Generator
      </h1>

      {/* Password Box */}
      <div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-gray-800">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-3 px-4 bg-gray-800 text-white text-lg tracking-wider"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <Motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={copyPasswordToClipboard}
          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white px-5 py-2 text-sm font-medium"
        >
          Copy
        </Motion.button>
      </div>

      {/* Regenerate Button */}
      <Motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={passwordGenerator}
        className="bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white px-5 py-2 text-sm font-medium rounded-md mb-6 w-full"
      >
        Regenerate Password
      </Motion.button>

      {/* Controls */}
      <div className="flex flex-col gap-5 text-sm text-gray-300">
        {/* Length */}
        <div className="flex items-center gap-x-3">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer w-full accent-orange-400"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-base font-medium">
            Length: <span className="text-orange-400">{length}</span>
          </label>
        </div>

        {/* Numbers */}
        <Motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-x-3 cursor-pointer"
        >
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            className="accent-orange-400 h-4 w-4"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Include Numbers</label>
        </Motion.div>

        {/* Characters */}
        <Motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-x-3 cursor-pointer"
        >
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="CharacterInput"
            className="accent-orange-400 h-4 w-4"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="CharacterInput">Include Special Characters</label>
        </Motion.div>
      </div>

      {/* Password Strength */}
      <p className="mt-6 text-center text-sm text-gray-400">
        Strength:{" "}
        <span
          className={`font-semibold ${
            getStrength() === "Strong"
              ? "text-green-400"
              : getStrength() === "Medium"
              ? "text-yellow-400"
              : "text-red-400"
          }`}
        >
          {getStrength()}
        </span>
      </p>
    </Motion.div>
  )
}

export default App

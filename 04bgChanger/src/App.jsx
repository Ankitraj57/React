import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
      style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
            style={{ background: "red" }}
          >Red</button>

          <button
            onClick={() => setColor("Green")}
            className="outline-none px-4 py-1 rounded-full text-dark  shadow-lg"
            style={{ background: "Green" }}
          >Green</button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
            style={{ background: "Blue" }}
          >Blue</button>

          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-dark  shadow-lg"
            style={{ background: "yellow" }}
          >Yellow</button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg"
            style={{ background: "black" }}
          >Black</button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-dark  shadow-lg"
            style={{ background: "pink" }}
          >Pink</button>

          <button
            onClick={() => setColor("Gray")}
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg border-2"
            style={{ background: "gray" }}
          >Gray</button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-dark  shadow-lg"
            style={{ background: "Orange" }}
          >Orange</button>

          <button
            onClick={() => setColor("maroon")}
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg "
            style={{ background: "maroon" }}
          >Maroon</button>

          <button
            onClick={() => setColor("Violet")}
            className="outline-none px-4 py-1 rounded-full text-dark  shadow-lg"
            style={{ background: "Violet" }}
          >Violet</button>

          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg border-2"
            style={{ background: "Olive" }}
          >Olive</button>

          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-dark  shadow-lg border-2"
            style={{ background: "lavender" }}
          >Lavender</button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white  shadow-lg border-2"
            style={{ background: "purple" }}
          >Purple</button>

        </div>
      </div>
    </div>
  )
}

export default App

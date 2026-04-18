import{ useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-300 flex"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap text-lg font-bold  justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none rounded px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className="outline-none rounded px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className="outline-none rounded px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
            className="outline-none rounded px-4 py-1 text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            YELLOW
          </button>
          <button
            className="outline-none rounded px-4 py-1 text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            BLACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

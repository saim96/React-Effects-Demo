import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(
    function myEffect() {
      console.log("MY EFFECT WAS CALLED!");
    },
    [count]
  );

  const increment = () => {
    setCount((c) => c + 1);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1 className="text-blue-500">{count}</h1>
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={increment}>+1</button>
      <p>Name: {name}</p>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  );
}

import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QouteFetcher() {
  const [qoute, setQoute] = useState({ text: "", author: "" });

  {
    /* useEffect(() => {
    // the useEffect doesn't allow us to have a async callback that is why we need to wrap it up in a non-async function
    async function getInitialQoute() {
      // this registers an async function
      const response = await fetch(RANDOM_QUOTE_URL); //getInitalQoute goes and gets information from the API,
      const jsonResponse = await response.json(); // Parses it
      const randomQoute = jsonResponse.quote;
      setQoute(randomQoute); // call setQoute which will then update our State
    }
    getInitialQoute(); // and then immediately invokes function
  }, []); //the empty array just says run this one time after the initial load */
  }

  useEffect(() => {
    fetchQoute();
  }, []);

  async function fetchQoute() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQoute = jsonResponse.quote;
    setQoute(randomQoute);
  }

  return (
    <div>
      <button onClick={fetchQoute}>Get Qoute</button>
      <h2>"{qoute.text}"</h2>
      <h3>{qoute.author}</h3>
    </div>
  );
}

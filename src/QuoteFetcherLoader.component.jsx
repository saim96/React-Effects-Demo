import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QouteFetcherLoader() {
  const [qoute, setQoute] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQoute() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQoute = jsonResponse.quote;
      setQoute(randomQoute);
      setIsLoading(false);
    }
    fetchQoute();
  }, []);

  return (
    <div>
    <p className="Loader" style={{opacity: isLoading ? 1 : 0}}>Loadingo..</p>
      <h2>"{qoute.text}"</h2>
      <h3>{qoute.author}</h3>
    </div>
  );
}

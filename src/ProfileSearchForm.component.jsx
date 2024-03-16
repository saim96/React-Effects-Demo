import { useState } from "react";

export default function ProfileSearchForm({ searches }) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    searches(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={term} onChange={handleChange}></input>
      <button> Search! </button>
    </form>
  );
}

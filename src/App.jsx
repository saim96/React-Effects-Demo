import "./App.css";
import QuoteFetcher from "./QouteFetcher.component";
import Counter from "./counter";
import QouteFetcherLoader from "./QuoteFetcherLoader.component";

function App() {
  return (
    <>
      <h1>Counter</h1>
      <Counter />
      <hr />
      <QuoteFetcher />
      <hr/>
      <QouteFetcherLoader/>
    </>
  );
}

export default App;

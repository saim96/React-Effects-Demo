import "./App.css";
import QuoteFetcher from "./QouteFetcher.component";
import Counter from "./counter";
import QouteFetcherLoader from "./QuoteFetcherLoader.component";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch.component";

function App() {
  return (
    <>
      <ProfileViewerWithSearch />
      <hr />
      <h1>Counter</h1>
      <Counter />
      <hr />
      <QuoteFetcher />
      <hr />
      <QouteFetcherLoader />
    </>
  );
}

export default App;

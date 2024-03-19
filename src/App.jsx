import "./index.css";
import "./App.css";
import QuoteFetcher from "./QouteFetcher.component";
// import Counter from "./counter";
import QouteFetcherLoader from "./QuoteFetcherLoader.component";
import ProfileViewerWithSearch from "./ProfileViewerWithSearch.component";
// import RenderDemo from "./RenderDemo"

function App() {
  return (
    <>
      <ProfileViewerWithSearch />
      <hr />
      
      <QuoteFetcher />
      <hr />
      <QouteFetcherLoader />
    </>
  );
}

export default App;

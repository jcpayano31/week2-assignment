import "./App.css";
import NewsArticles from "./component/NewsArticles";
import InCaseYouMissed from "./component/InCaseYouMissed";

function App(props) {
  return (
    <div className="App">
      <h1>For you</h1>
      <section className="articleslist">
        <NewsArticles />        
      </section>
      <h1> In Case you missed it</h1>
      <div className="news-missined">
        <InCaseYouMissed />
      </div>
    </div>
  );
}
export default App;

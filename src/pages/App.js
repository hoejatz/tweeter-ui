import '../css/App.css';
import TweetFeed from '../components/TweetFeed';
import NavBar from '../components/NavBar';
import NewsFeed from '../components/NewsFeed'

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar/>
      </nav>
      <section id="tweets-section">
        <TweetFeed />
      </section>
      <section id="tweet-show-page-section">
      </section>
      <section id="news-section">
        <NewsFeed />
      </section>
    </div>
  )
}

export default App;

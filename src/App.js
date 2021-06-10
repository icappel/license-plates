import NavBar from 'NavBar';
import './App.scss'
import HomeScreen from './HomeScreen'
import { Switch, Route } from 'react-router-dom'
import SearchScreen from 'SearchScreen';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact><HomeScreen /></Route>
        <Route path="/search"><SearchScreen /></Route>
      </Switch>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Made by <a href="https://iancappellani.com">Ian Cappellani</a>.
          </p>
          <p>
            The source code can be found in <a href="https://github.com/icappel/license-plates">this GitHub repo</a>.
          </p>
          <p>
            This website is for demonstration purposes only and no claim is made 
            to the accuracy of any information found here.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App

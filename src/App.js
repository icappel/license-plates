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
    </div>
  );
}

export default App

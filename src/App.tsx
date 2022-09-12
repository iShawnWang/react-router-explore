import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Topics } from './Topics'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/topics">
            <Topics></Topics>
          </Route>
          <Route path="/">
            home
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

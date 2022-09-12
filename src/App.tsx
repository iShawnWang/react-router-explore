import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Topics } from './Topics'
import { Home } from './Home'

export const App = () => {

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
          <Route path="/topics" key="topics" component={Topics}>
          </Route>
          <Route path="/" key="/" component={Home}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

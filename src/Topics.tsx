import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useEffect } from 'react'

export function Topics() {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    console.log('Topics Mounted')
    return () => {
      console.log('Topics Unmounted')
    }
  }, [])

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export function Topic() {
  let { topicId } = useParams<{ topicId: string }>();

  useEffect(() => {
    console.log(`Topic: ${topicId}`)
    return () => {
      console.log(`Topic: ${topicId}`)
    }
  }, [topicId])

  useEffect(() => {
    console.log('Topic Mounted')
    return () => {
      console.log('Topic unMounted')
    }
  }, [])

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
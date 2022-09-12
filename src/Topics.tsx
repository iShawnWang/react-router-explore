import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useEffect } from 'react'

export const Topics = () => {
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
          <Link to={`${url}/nested1`}>Nested1</Link>
        </li>
        <li>
          <Link to={`${url}/nested2`}>Nested2</Link>
        </li>
        <li>
          <Link to={`${url}/nested3`}>Nested3</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`} key="topic">
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export const Topic = () => {
  let { topicId } = useParams<{ topicId: string }>();

  useEffect(() => {
    console.log(`Topic: ${topicId} prop mount`)
    return () => {
      console.log(`Topic: ${topicId} prop unmount`)
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
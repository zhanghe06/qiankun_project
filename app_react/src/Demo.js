import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Demo() {
  return (
    // 添加路由的话 需要修改baseurl
    <div>
      <h1>React App</h1>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app/react' : '/'}>
        <Link to='/'>Home</Link> | <Link to='/abort'>About</Link>
        <Route path='/' exact component={() => (<h1>Home</h1>)}>
        </Route>
        <Route path='/abort' component={() => (<h1>About</h1>)}>
        </Route>
      </Router>
    </div>
  );
}

export default Demo;

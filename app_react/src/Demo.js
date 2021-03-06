import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Demo.css';

function Demo() {
  return (
    // 添加路由的话 需要修改baseurl
    <div>
      <h2 className="Demo">React App</h2>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app/react' : '/'}>
        <Link to='/'>Home</Link> | <Link to='/abort'>About</Link>
        <Route path='/' exact component={() => (<h3>React Home Page</h3>)}>
        </Route>
        <Route path='/abort' component={() => (<h3>React About Page</h3>)}>
        </Route>
      </Router>
    </div>
  );
}

export default Demo;

// const NotFound = {template: '<p>Page not found</p>'}
const Home = {template: '<h3>VUE Home Page</h3>'}
const About = {template: '<h3>VUE About Page</h3>'}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

export default routes

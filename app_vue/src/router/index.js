// const NotFound = {template: '<p>Page not found</p>'}
const Home = {template: '<p>home page</p>'}
const About = {template: '<p>about page</p>'}

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

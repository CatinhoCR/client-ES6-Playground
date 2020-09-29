import Router from './config/routing'
import Header from './components/header'
import Login from './auth/login'
import Dashboard from './modules/dashboard'
import Artists from './modules/artists'
import '../assets/scss/styles.scss'

const router = new Router({
  mode: 'hash',
  root: '/',
})
// TODO: Login, Session Cookies, Auth Guards, Set Dynamic Token session
router
.add('artists', () => {
  Artists.init()
})
.add('login', () => {
  Login.init()
})
.add('', () => {
  Dashboard.init()
})

class App {
  constructor () {
    // TODO: Separate shit in components... Functional - Proof of concept for now
    this.header = Header.init()
    // TODO: Populate dynamically: url -> fetch -> data -> populates
    this.content = document.getElementById('page-container')
  }
}

const app = new App()

/*
// TODO:
router
  // .add(/products\/(.*)\/specification\/(.*)/, (id, specification) => {
  //   alert(`products: ${id} specification: ${specification}`)
  // })
*/
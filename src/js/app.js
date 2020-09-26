import Router from './config/routing'
import Header from './components/header'
import Dashboard from './modules/dashboard'
import Artists from './modules/artists'
import '../assets/scss/styles.scss'

const router = new Router({
  mode: 'hash',
  root: '/',
})

router
.add('artists', () => {
  Artists.init()
})
.add('', () => {
  Dashboard.init()
})

class App {
  constructor () {
    this.header = Header.init()
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
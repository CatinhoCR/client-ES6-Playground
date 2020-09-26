// import 'babel-polyfill'
import { hello, tes } from './globals/import-example'

import '../scss/styles.scss'

// Include css for webpack (for development only)
// const css = require('../css/main.scss') // eslint-disable-line no-unused-vars

// Hot reloading (for development only)
// if (module.hot) {
//   module.hot.accept()
// }

hello()

async function run() {
  const value = await tes()
  console.log(value)
}

run();

async function lazyLoadExample() {
  const { lazyLoad } = await import('./globals/lazyload')
  lazyLoad().then(res => console.log(res))
};

const lazyload = document.querySelector("#lazy-load")
if (lazyload) lazyload.addEventListener('click', lazyLoadExample)

import { hello, tes } from '../globals/import-example'

class DashboardComponent {
  constructor(el) {
    if (el) {
			this.dashboard = el
			this.initDashboard()
    }
	}

	async initDashboard() {
		this.dashboard.innerHTML = await this.render()

		// TODO: Sample/Example, replace for actual implementation
		this.run()
	}

	// TODO: Example shit
	async run() {
		const value = await tes()
		console.log(value)
		hello()
		const lazyload = document.querySelector('#lazy-load')
		if (lazyload) lazyload.addEventListener('click', this.lazyLoadExample)
	}

	// TODO: Example shit
	async lazyLoadExample() {
		const { lazyLoad } = await import('../globals/lazyload')
		lazyLoad().then((res) => console.log(res))
	}

  async render() {
		return await this.template()
	}

  template() {
    const Dashboard = /*html*/ `
		<h1 id="lazy-load">Holi Lazy Loader</h1>
		<p>Click title above and see console.log</p>
		`
		return Dashboard
  }
}

const dashboard = {
  init() {
    const wrapperEl = document.querySelector('#page-container')
    if (wrapperEl) {
      const dashboard = new DashboardComponent(wrapperEl)
    }
  },
}

export default dashboard

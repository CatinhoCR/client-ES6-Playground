class HeaderComponent {
  constructor(el) {
    if (el) {
			console.log('Head')
			this.header = el
			this.initHeader()
    }
	}

	async initHeader() {
		this.header.innerHTML = await this.render()
	}

  async render() {
		return await this.template()
	}

  template() {
    const NavBar = /*html*/ `
		<nav>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="/#/artists">Artists</a>
				</li>
			</ul>
		</nav>
		`
		return NavBar
  }
}

const header = {
  init() {
    const wrapperEl = document.querySelector('#header-container')
    if (wrapperEl) {
      const nav = new HeaderComponent(wrapperEl)
    }
  },
}

export default header

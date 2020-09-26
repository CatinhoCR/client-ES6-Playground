class ArtistComponent {
  constructor(el) {
    if (el) {
			this.artists = el
			this.initArtists()
    }
	}

	async initArtists() {
		this.artists.innerHTML = await this.render()
	}

  async render() {
		return await this.template()
	}

  template() {
    const Artists = /*html*/ `
		<h1>Artists</h1>
		`
		return Artists
  }
}

const artists = {
  init() {
    const wrapperEl = document.querySelector('#page-container')
    if (wrapperEl) {
      const artists = new ArtistComponent(wrapperEl)
    }
  },
}

export default artists

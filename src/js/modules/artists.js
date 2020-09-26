class ArtistComponent {
  constructor(el) {
    if (el) {
      this.artists = el
      this.initArtists()
    }
  }

  async initArtists() {
    this.data = await this.getArtists()
    console.log(this.data)
    this.artists.innerHTML = await this.render(this.data)
  }

  async render() {
    return await this.template()
  }

  async getArtists() {
    const artists = fetch('http://localhost:8000/api/artists', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // TODO: Get from cookie and helper cookie function
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZjZlZDRhMDY4NTIwYWE2MDNjOTc1ZDIiLCJ1c2VybmFtZSI6IkNhdG81MDYiLCJmdWxsbmFtZSI6IkVzQ2F0byIsImVtYWlsIjoiY2F0b0BtaWNyb2dhcmRlbm11c2ljLmNvbSIsInJvbGUiOiJhZG1pbiIsImltYWdlIjoibnVsbCIsImlhdCI6MTYwMTExMjY5Nn0.h6lh0qCxrcEsCM_99hi0cPzLs4eLkfOvoCHPrO-V1Xw',
        // 'Access-Control-Allow-Origin': '*'
      },
    })
      .then(
        (response) => response.json(),
        (error) => error
      )
      .then((artists) => {
        return artists
      })
    // console.log((response) => response.json())
    return artists
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

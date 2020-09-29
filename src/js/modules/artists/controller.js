class ArtistController {
	constructor (el) {

	}

	async getArtists () {
		const data = fetch('http://localhost:8000/api/artists/5', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		})
		.then(
			response => response.json(),
			error => error)
			.then((data) => {
					return data
			})
			.catch((err) => {
					console.log(error)
			})

			return data
	}
}

const artistCtrl = {
	init() {
		const wrapperEl = document.querySelector('#artists-wrapper')
		if (wrapperEl) {
			const artists = new ArtistController()
		}
	}
}

export default artistCtrl

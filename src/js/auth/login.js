class LoginComponent {
  constructor(el) {
    if (el) {
      this.login = el
      this.initLogin()
    }
  }

  async initLogin() {
    this.login.innerHTML = await this.render()
    this.loginSubmit()
  }

  async render() {
    return await this.template()
  }

  async loginSubmit() {
    this.submit = document.querySelector('#login-submit')

    this.submit.addEventListener('click', (e) => {
      e.preventDefault()
      let em = document.querySelector('#user-email')
      let pw = document.querySelector('#user-password')
      // console.log(pw.value)
      const data = {
        email: em.value,
				password: pw.value,
				getHash: true
			}
			this.validateForm(data)
			// cato@microgardenmusic.com
		})
	}

	async validateForm(data) {
		let tk = await this.loginRequest(data)
		console.log(tk.token)
		sessionStorage.setItem('token', tk.token)
		return tk
	}

  async loginRequest(p) {
    var logger = fetch('http://localhost:8000/api/login', {
      method: 'POST',
      body: JSON.stringify(p),
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
      },
    })
      .then(
        (response) => response.json(),
        (error) => error
      )
      .then((logger) => {
        return logger
			})
			.catch((error) => {
				console.log(error);
			})
		return logger

		// console.log(logger)
  }

  template() {
    const Login = /*html*/ `
		<form class="form" id="login-form">
			<div class="form__group">
				<label class="form__label" for="user-email">Email</label>
				<input class="form__field" type="email" id="user-email" placeholder="your@email.com" autocomplete="off">
			</div>
			<div class="form__group">
				<label class="form__label" for="user-password">Password</label>
				<input class="form__field" type="password" id="user-password" placeholder="****" autocomplete="off">
			</div>
			<div class="form__group">
				<button class="button" type="submit" id="login-submit">
					Log In!
				</button>
			</div>
		</form>`
    return Login
  }
}

const login = {
  init() {
    const wrapperEl = document.querySelector('#page-container')
    if (wrapperEl) {
      const login = new LoginComponent(wrapperEl)
    }
  },
}

export default login

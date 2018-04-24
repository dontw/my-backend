import Cookie from 'js-cookie'

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },

  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  authenticateUser({ commit }, authData) {
    let authUrl =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
      process.env.fbAPIKey

    return this.$axios
      .$post(authUrl, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then(result => {
        // set token to vuex's state
        vuexContext.commit('setToken', result.idToken)

        // set token & token's expiration to borwser's localstorage
        Cookie.set('jwt', result.idToken)
        Cookie.set(
          'expirationDate',
          new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
        )
        return 'OK!'
      })
      .catch(e => {
        console.warn('Auth Error MSG: ', e.response)
        return 'error'
        // throw new Error('error')
      })
  }
}

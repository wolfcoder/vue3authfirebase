import firebase from 'firebase'
import router from '@/router'

export default {
  namespaced: true,
  state () {
    return {
      authUser: null,
      unsubscribeAuthObserver: null
    }
  },
  getters: {
    authUserData (state) {
      return state.authUser
    }
  },
  actions: {
    initAuthentication ({
      dispatch,
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        if (state.unsubscribeAuthObserver) {
          state.unsubscribeAuthObserver()
        }
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          console.log('user has changed')
          if (user) {
            // dispatch('fetchAuthUser')
            commit('setAuthId', user)
            resolve(user)
          } else {
            resolve(null)
          }
        })
        commit('setUnsubscribeAuthObserver', unsubscribe)
      })
    },

    registerUserWithEmailAndPassword ({ dispatch }, {
      email,
      password
    }) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        // .then((user) => {
        //   dispatch('fetchAuthUser')
        // })
        .then(() => router.replace('/Profile'))
    },

    fetchAuthUser ({ commit }) {
      const userAuth = firebase.auth().currentUser
      commit('setAuthId', userAuth)
    },

    signInWithEmailAndPassword ({ dispatch }, {
      email,
      password
    }) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        // .then(() => {
        //   dispatch('fetchAuthUser')
        //   router.push({ name: 'Profile' })
        // })
        .then(() => router.replace('/Profile'))
    },

    signInWithThirdParty ({ dispatch }, provider) {
      const providerAuth = new firebase.auth[provider]()
      return firebase.auth().signInWithPopup(providerAuth)
        .then(() => {
          dispatch('fetchAuthUser')
          router.push({ name: 'Profile' })
        })
    },

    signOut (context) {
      return firebase.auth().signOut()
        .then(() => {
          context.commit('setAuthId', null)
        })
    }
  },
  mutations: {
    setAuthId (state, userAuth) {
      state.authUser = userAuth
    },

    setUnsubscribeAuthObserver (state, unsubscribe) {
      state.unsubscribeAuthObserver = unsubscribe
    }
  }
}

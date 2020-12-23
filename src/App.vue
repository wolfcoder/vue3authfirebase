<template>
  <div class="container-fluid bg-light">
    <div class="container d-block d-md-flex align-items-center text-center justify-content-md-between py-2">
      <h1 class="h5 m-0">Vue 3 Authentication with firebase</h1>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        </li>
        <li class="nav-item" v-if="isAuthUser">
          <a class="nav-link text-danger" href="#" @click.prevent="signOut">Sign Out</a>
        </li>
      </ul>
    </div>
  </div>

  <router-view/>
</template>

<script>
import router from '@/router'

export default {
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
        .then(() => router.push({ name: 'Home' }))
    }
  },
  computed: {
    isAuthUser () {
      return this.$store.getters['auth/authUserData']
    }
  },
}
</script>


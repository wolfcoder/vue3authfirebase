<template>
  <div class="container text-center justify-content-center">
    <img alt="Vue logo" class="my-4" width="70" src="../assets/logo.png">
    <div class="container bg-light p-4 mb-4">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <h4>Register With Email</h4>
          <form class="form-inline" @submit.prevent="register">
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <input v-model="form.email" type="email" class="form-control mb-2 mr-sm-2 form-control-sm"
                   id="inlineFormInputName2" placeholder="email">
            <label class="sr-only" for="inlineFormInputGroupUsername2">Password</label>
            <div class="input-group mb-2 mr-sm-2">
              <input v-model="form.password" autocomplete="on" type="password" class="form-control form-control-sm"
                     id="inlineFormInputGroupUsername2" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-sm btn-success mb-2">SignUp</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container bg-light p-4 mb-4">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <h4>Sign in With Email</h4>
          <form class="form-inline" @submit.prevent="signIn">
            <label class="sr-only" for="inlineFormInputName3">Name</label>
            <input v-model="form.email" type="email" class="form-control mb-2 mr-sm-2 form-control-sm"
                   id="inlineFormInputName3" placeholder="email">
            <label class="sr-only" for="inlineFormInputGroupUsername3">Password</label>
            <div class="input-group mb-2 mr-sm-2">
              <input v-model="form.password" type="password" autocomplete="on" class="form-control form-control-sm"
                     id="inlineFormInputGroupUsername3" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-sm btn-success mb-2">SignIn</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container bg-light p-4 mb-4">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <h4>Sign In With Third Party</h4>
          <button class="btn btn-danger" @click="signInWithThirdParty('GoogleAuthProvider')">Google</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import router from '@/router'

export default {
  name: 'Home',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.$store.dispatch('auth/registerUserWithEmailAndPassword', this.form)
    },

    signIn () {
      this.$store.dispatch('auth/signInWithEmailAndPassword', this.form)

    },

    signInWithThirdParty (provider) {
      this.$store.dispatch('auth/signInWithThirdParty', provider)
    }
  }
}
</script>

<style lang="scss">


</style>

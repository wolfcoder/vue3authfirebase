<template>
  <div class="container">
    <img v-if="authUserData.photoURL" class="rounded-circle mx-auto d-block my-4" :src="authUserData.photoURL"
         alt="photo profile"/>
    <img v-else width="80" class="rounded-circle mx-auto d-block my-4 border" src="../assets/logo.png"
         alt="photo profile"/>
    <div class="row justify-content-center">
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-title text-center">
            <h2 class="mb-0 mt-2">Profile</h2>
          </div>
          <div class="card-body">
            <table class="table table-hover">

              <tbody>
              <tr>
                <th scope="row">Name:</th>
                <td>{{ authUserData.displayName }}</td>
              </tr>
              <tr>
                <th scope="row">Email:</th>
                <td>{{ authUserData.email }}</td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Profile',
  computed: {
    authUserData () {
      return this.$store.getters['auth/authUserData']
    }
  }
}
</script>

<style scoped>

</style>

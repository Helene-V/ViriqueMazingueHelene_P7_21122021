<template>
  <div class="container">
    <header class="jumbotron mt-5">
      <h3 class="text-center">
        <strong>{{'Welcome on your profile ' +currentUser.username + ' !'}}</strong>
      </h3>
    </header>
    <p class="text-center">
      <strong>Identification for find your account in the database of Groupomania :</strong>
      <br>
      {{'Your are number ' + ' "' + currentUser.id + '" '}}
    </p>
    <p class="text-center">
      <strong>Your email :</strong>
      <br>
      {{currentUser.email}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.jumbotron{
background-color:#f0c1c3;
}
</style>
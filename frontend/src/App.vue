<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light font-weight-bold .bg-light">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
      <router-link to="/home" class="nav-link">
        <img src="./assets/logo.png" class="navbar-brand logo" />
      </router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ 'Hello ' + currentUser.username + ' !' }}
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/articles" class="nav-link">News Feed</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">New post</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },

  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.logo {
  height: 45px;
  width: auto;
}

.navbar {
  box-shadow: 0px 10px 20px #c0c0c0;
}
</style>
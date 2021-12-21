<template>
  <div class="container">
    <h1 class="mt-5 text-center">Welcome to Groupomania</h1>
    <img v-bind:src="require(`@/assets/backgroundImage.png`)" class="mt-5" />
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: '',
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>

<style>

</style>
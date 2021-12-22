<template>
  <div class="container">
    <h1 class="mt-5 text-center">Welcome to Groupomania</h1>
    <img v-bind:src="require(`@/assets/backgroundImage.png`)" class="mt-5" />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      content: '',
    };
  },
  
 
  
};
</script>

<style>

</style>
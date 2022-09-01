<template>
  <div class="home">

    <h3>Select Game</h3>

    <div class="d-grid gap-2 col-6 mx-auto">
      <router-link class="btn btn-primary" to="/manual-pick">Manual Pick</router-link>
      <router-link class="btn btn-primary" to="/lucky-dip">Lucky Dip</router-link>
      <router-link class="btn btn-primary" to="/quick-run">Quick Run</router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HomeView'
  }
</script>

<style>
  .home {
    align-items: center;
    display: block;
  }
</style>
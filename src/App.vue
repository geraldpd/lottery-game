<template>

  <h1>Lottery Game</h1>

  <div class="container">
    <router-view/>
  </div>

  <br>
  <router-link v-show="this.$route.path  != '/'" class="btn btn-link" to="/">Home</router-link>

</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>

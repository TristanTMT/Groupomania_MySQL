<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
html{
  box-sizing: border-box;
}

body {
    margin:0;
    padding:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

a.router-link-exact-active {
  color: inherit;
}
</style>

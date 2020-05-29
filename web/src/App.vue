<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
  @import "./scss/_variables.scss";
  @import '../node_modules/bootstrap/scss/bootstrap';
  @import '../node_modules/bootstrap-vue/src/index.scss';

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;

    #app {
      width: 100%;
      height: 100%;
      min-height: 100vh;
    }
  }
</style>

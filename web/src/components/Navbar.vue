<template>
  <b-navbar id="navbar" toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Maxang.me</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="m-nav-item" :to="{ name: 'MyCV' }" :active='$route.name =="MyCV"'>
          My CV
        </b-nav-item>
        <b-nav-item class="m-nav-item" :to="{ name: 'Series' }" :active='$route.name =="Series"'>
          Get Series
        </b-nav-item>
        <b-nav-item class="m-nav-item" :to="{ name: 'Bc' }" :active='$route.name =="Bc"'>
          Get BC
        </b-nav-item>
        <b-nav-item class="m-nav-item" :to="{ name: 'CentralWorld' }" :active='$route.name =="CentralWorld"'>
          Go Central World
        </b-nav-item>
        <b-nav-item class="m-nav-item" :to="{ name: 'Notification' }" :active='$route.name =="Notification"'>
          Line Notification
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  @import "../scss/_variables.scss";

  #navbar {
    padding: 15px;

    .m-nav-item {
      margin: 0 5px;

      > .nav-link {
        color: $secondary;
        font-size: 15px;
        padding: 10px 20px;

        &:hover, &.active {
          color: $primary;
          background: $secondary;
          border-radius: 20px;
        }
      }
    }

  }
</style>

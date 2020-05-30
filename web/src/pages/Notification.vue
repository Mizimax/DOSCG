<template>
  <div class="m-container">
    This is Notification page
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Notification',
    computed: mapGetters({ fullName: 'user/fullName' })
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 20px;
    text-align: center;
  }
</style>
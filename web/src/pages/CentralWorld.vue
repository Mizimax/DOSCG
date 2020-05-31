<template>
  <div class="m-container">
    <h2>Central World Direction from SCG Bangsue</h2>
    <div v-for="(path, index) in paths" :key="`path-${index}`" v-html="(index+1) + '.) ' + path.html_instructions">
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name    : 'CentralWorld',
    computed: {
      ...mapGetters('cw',
        {
          paths       : 'getPaths',
        },
      ),
    },
    methods :
      mapActions('cw', [
        'fetchCw',
      ]),
    created() {
      this.fetchCw()
    }
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 20px;
    text-align: center;
  }
</style>
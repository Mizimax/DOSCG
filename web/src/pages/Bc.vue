<template>
  <div class="m-container">
    <p>
      If A = <input type="number" v-model="a"><br/>
      A + B = <input type="number" v-model="ab"><br/>
      A + C = <input type="number" v-model="ac">
      <br/>
    </p>
    <div v-if="isLoaded">
      B = {{ b }}<br/>
      C = {{ c }}
    </div>
    <div v-else-if="errorLoading != ''">
      {{ errorLoading }}
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name    : 'Bc',
    computed: mapGetters('bc', {
      b: 'getB',
      c: 'getC',
    }),
    methods : {
      ...mapActions('bc', [
        'fetchBc',
      ]),

      fetchNewBc: function (a, b, c) {
        this.isLoaded = false
        this.fetchBc(a, b, c).then(() => {
          this.isLoaded = true
        }).catch(error => {
          this.isLoaded = false
          this.errorLoading = error.message
        })
      },
    },
    watch   : {
      a : function (val) {
        this.fetchNewBc(val, this.ab, this.bc)
      },
      ab: function (val) {
        this.fetchNewBc(this.a, val, this.ac)
      },
      ac: function (val) {
        this.fetchNewBc(this.a, this.ab, val)
      },
    },
    data() {
      return {
        a           : 21,
        ab          : 23,
        ac          : -21,
        isLoaded    : false,
        errorLoading: '',
      }
    },
    created() {
      this.fetchNewBc(this.a, this.ab, this.bc)
    },
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 20px;
    text-align: center;
  }
</style>
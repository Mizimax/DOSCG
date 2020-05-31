<template>
  <div class="m-container">
    <p>
      If A = <input type="number" v-model.number="inputEquation['a']"><br/>
      A + B = <input type="number" v-model.number="inputEquation['ab']"><br/>
      A + C = <input type="number" v-model.number="inputEquation['ac']">
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
    computed: {
      ...mapGetters('bc',
        {
          b         : 'getB',
          c         : 'getC',
          equation: 'getEquation'
        }
      )
    },
    methods : {
      ...
        mapActions('bc', [
          'fetchBc',
          'setInputEquation',
        ]),

      fetchNewBc: function (equation) {
          this.isLoaded = false
          this.fetchBc(equation).then(() => {
            this.isLoaded = true
          }).catch(error => {
            this.isLoaded     = false
            this.errorLoading = error.message
          })
        }

      ,
    }
    ,
    watch   : {
      inputEquation: {
        handler(val) {
          this.setInputEquation(val)
          this.fetchNewBc(val)
        },
        deep: true
      }
    }
    ,
    data() {
      return {
        inputEquation: {
          a : 21,
          ab: 23,
          ac: -21,
        },
        isLoaded     : false,
        errorLoading : '',
      }
    }
    ,
    created() {
      this.fetchNewBc(this.inputEquation)
    }
    ,
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 20px;
    text-align: center;
  }
</style>
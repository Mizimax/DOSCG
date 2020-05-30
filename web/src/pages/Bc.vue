<template>
  <div class="m-container">
    <p>
      If A = <input type="number" v-model="a"><br/>
      A + B = <input type="number" v-model="ab"><br/>
      A + C = <input type="number" v-model="ac">
      <br/><br/>
      B = {{ b }}<br/>
      C = {{ c }}
    </p>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'Bc',
    computed: mapGetters('bc', {
      b: 'getB',
      c: 'getC',
    }),
    methods: {
      ...mapActions('bc', [
        'fetchBc',
      ])
    },
    watch: {
      a: function (val) {
        this.fetchBc(val, this.ab, this.ac)
      },
      ab: function (val) {
        this.fetchBc(this.a, val, this.ac)
      },
      ac: function (val) {
        this.fetchBc(this.a, this.ab, val)
      }
    },
    data() {
      return {
        a: 21,
        ab: 23,
        ac: -21
      }
    },
    created() {
      this.fetchBc();
    }
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 20px;
    text-align: center;
  }
</style>
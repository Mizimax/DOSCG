<template>
  <div class="m-container">
    Input :
    <div v-for="(inputSerie, index) in inputSeries" :key="`input-${index}`">
      <input type="number" v-model.number="inputSeries[index]"><br/>
    </div>
    <br/>
    The result is <br/>
    <div v-if="isLoaded">
      <div v-for="(no, index) in series" :key="`no-${index}`">
        <span v-if="index == 0">X = </span>
        <span v-else-if="index == 1">Y = </span>
        <span v-else-if="index == series.length-1">Z = </span>
        {{ no }}
      </div>
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
    name    : 'Series',
    computed: {
      ...mapGetters('series', {
        series: 'getSeries',
      }),
    },
    methods : {
      ...mapActions('series', [
        'fetchSeries',
        'setInputSeries',
      ]),

      fetchNewSeries: function (newSeries) {
        this.isLoaded = false
        this.fetchSeries(newSeries).then(() => {
          this.isLoaded = true
        }).catch(error => {
          this.isLoaded     = false
          this.errorLoading = error.message
        })
      },
    },
    watch   : {
      inputSeries: {
        handler(val) {
          this.setInputSeries(val)
          this.fetchNewSeries(val)
        },
        deep: true,
      },
    },
    data() {
      return {
        inputSeries : [5, 9, 15, 23],
        isLoaded    : false,
        errorLoading: '',
      }
    },
    created() {
      this.fetchNewSeries(this.inputSeries)
    },
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 20px;
    text-align: center;
  }
</style>
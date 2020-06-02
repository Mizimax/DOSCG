<template>
  <div class="m-container">
    MaxBot QR<br/>
    <img src="../assets/maxbot.png" width="200" alt="">
    <div class="noti-wrapper" v-for="(noti, index) in notis" :key="`noti-${index}`">
      ไม่ได้ตอบ user : {{ noti.user_name }} เป็นเวลา 10 วินาที
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Notification',
    computed: {
      ...mapGetters('noti',
        {
          notis: 'getNotis'
        }
      )
    },
    methods :
        mapActions('noti', [
          'fetchNotis',
        ]),

    created() {
      this.fetchNotis();
    }
  }
</script>

<style scoped lang="scss">
  .m-container {
    margin: 20px;
    text-align: center;

    > .noti-wrapper {
      border: 1px solid #ccc;
      padding: 20px;
      margin-bottom: 15px;
    }
  }
</style>
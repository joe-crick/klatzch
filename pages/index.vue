<template>
  <section class="container">
    <div>
      <messenger :messages="messages"/>
    </div>
  </section>
</template>

<script>
  import Messenger from '~components/messenger/messenger.vue';
  import { mapState } from 'vuex';

  export default {
    components: {
      Messenger
    },
    computed: {
      ...mapState({
        messages: state => state.messages
      })
    },
    data () {
      return {
        messenger: {}
      };
    },
    mounted () {
      import('draggabilly').then(Drag => {
        this.messenger = new Drag('.klatzch-messenger', {});
      });
    }
  };
</script>

<style lang="scss">

</style>

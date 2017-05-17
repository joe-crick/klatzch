<template>
  <section class="container">
    <div>
      <messenger :messages="messages"/>
    </div>
  </section>
</template>

<script>
  import Messenger from '~components/messenger/messenger.vue';
  import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    components: {
      Messenger
    },
    computed: {
      ...mapState({
        messages: state => state.messages,
        messenger: state => state.messenger
      })
    },
    methods: {
      ...mapMutations({
        initMessenger: 'messenger/initMessenger'
      }),
      ...mapActions({
        loadMessages: 'messenger/loadMessages'
      })
    },
    mounted () {
      this.initMessenger();
      this.loadMessages('1');
    }
  };
</script>

<style lang="scss">

</style>

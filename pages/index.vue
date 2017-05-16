<template>
  <section class="container">
    <div>
      <messenger :messages="messages"/>
    </div>
  </section>
</template>

<script>
  import Messenger from '~components/messenger/messenger.vue';
  import { mapState, mapMutations } from 'vuex';

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
      ...mapMutations([
        'initMessenger'
      ])
    },
    mounted () {
      this.initMessenger();
    }
  };
</script>

<style lang="scss">

</style>

<!-- messenger.vue -->
<template>
  <div class="klatzch-messenger" :class="display">
    <div class="klatzch-messenger-header">
      <div class="container">
        <h4>Messaging</h4>
        <button
          class="btn btn-klatzch-tertiary right"
          @click="toggleMessenger">{{displayIndicator}}
        </button>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="klatzch-messenger-history-container">
      <messenger-history :messages="messages"></messenger-history>
    </div>
    <div class="klatzch-messenger-form container">
      <messenger-form></messenger-form>
    </div>
  </div>
</template>

<script>
  import MessengerHistory from './messenger-history.vue';
  import MessengerForm from './messenger-form.vue';
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'app',
    props: ['messages'],
    components: {
      MessengerHistory,
      MessengerForm
    },
    computed: {
      ...mapState({
        messages: state => state.messages,
        display: state => state.messenger.display,
        displayIndicator: state => state.messenger.displayIndicator
      })
    },
    methods: {
      ...mapMutations([
        'toggleMessenger'
      ])
    }
  };
</script>

<style lang="scss">
  @import '../../assets/scss/globals';

  .klatzch-messenger {
    height: 400px;
    width: 300px;
    @extend .border;
    position: absolute;
    top: 300px;
    left: 100px;
    background-color: $sea-whitish;
    border-radius: 10px;

    &.collapsed {
      position: fixed;
      bottom: 62px;
      right: 0;
      left: inherit;
      height: 0;
      top: inherit;
      .klatzch-messenger-history-container, .klatzch-messenger-form {
        display: none;
      }
    }

    .klatzch-messenger-header {
      border-radius: 10px 10px 0 0;
      background-color: $sea-greenish;
      padding: 10px;
      h4 {
        cursor: move;
        display: inline-block;
        line-height: 35px;
      }
      .container {
        max-width: 100%;
      }
    }

    .klatzch-messenger-history-container {
      padding-left: 7px;
      background-color: $sea-bright-white;
      overflow-y: scroll; // TODO: refactor vertical scrollable section
      max-height: 57%;
      border-radius: 5px
    }

    .klatzch-messenger-form {
      &.container {
        height: 10%;
        position: absolute;
        bottom: 45px;
      }
    }

  }
</style>

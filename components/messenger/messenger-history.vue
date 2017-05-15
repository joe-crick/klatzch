<!-- messenger-history.vue -->
<template>
  <div class="klatzch-chat-history container">
    <div class="row">
      <div v-for="message in messages" class="col-12 history-row">
        <messenger-history-entry :message="message.message"></messenger-history-entry>
      </div>
    </div>
  </div>
</template>

<script>
  import MessengerHistoryEntry from './messenger-history-entry.vue';
  export default {
    name: 'messenger-history',
    components: {MessengerHistoryEntry},
    props: ['messages']
  };
</script>

<style lang="scss">
  .klatzch-chat-history {
    padding-top: 10px;
    height: 100%;
  }
</style>

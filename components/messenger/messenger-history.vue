<!-- messenger-history.vue -->
<template>
  <div class="klatzch-chat-history container">
    <div class="row">
      <div v-for="entry in historyEntries" class="col-12 history-row">
        <span>{{entry}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'messenger-history',
    components: {},
    data () {
      return {
        historyEntries: []
      };
    }
  };
</script>

<style>

</style>

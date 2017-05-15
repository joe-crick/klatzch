<!-- messenger-history.vue -->
<template>
  <div class="klatzch-chat-history container">
    <div class="row">
      <div v-for="message in messages" class="col-12 history-row">
        <span>{{message.message}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'messenger-history',
    components: {},
    props: ['messages']
  };
</script>

<style>

</style>

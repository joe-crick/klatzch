<!-- messenger-history-entry.vue -->
<template>
  <div class="klatzch-history-entry row">
    <div class="icon-col col-2">
      <user-miniprofile-icon></user-miniprofile-icon>
    </div>
    <div class="col">
      {{message}}
    </div>
  </div>
</template>

<script>
  import UserMiniprofileIcon from '../user/user-miniprofile-icon.vue';
  export default {
    name: 'messenger-history-entry',
    components: {UserMiniprofileIcon},
    props: ['message']
  };
</script>

<style>

</style>

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

<style lang="scss">
  @import '../../assets/scss/globals.scss';

  .klatzch-history-entry {
    width: 100%;
    padding-bottom: 10px;
    border-radius: 5px;
    &:hover {
      background-color: $sea-grayish;
    }
    .icon-col {
      padding-left: 0;
    }
    .mini-profile-image {
      @extend .mini-profile-image;
      border-radius: 100px;
    }
  }
</style>

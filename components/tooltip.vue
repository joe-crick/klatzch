<!-- tooltip.vue -->
<template>
  <div class="klatzch-tooltip">
    <span class="fa fa-question-circle"></span>
    <div class="klatzch-tooltip-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    name: 'tooltip',
    components: {},
    data () {
      return {};
    },
    computed: {
      ...mapState({counter: state => state.counter})
    },
    methods: {
      ...mapMutations([''])
    }
  };
</script>

<style lang="scss">
  @import '../assets/scss/globals';

  .klatsch-tooltip {
    display: inline-block;
    position: absolute;
    @include small {
      min-width: 0;
      font-size: 12px;
    }
    .fa-question-circle {
      color: $sea-coralish;
      cursor: help;
    }
    &:hover + .klatsch-tooltip-body {
      display: block;
    }
    .klatsch-tooltip-body {
      display: none;
      position: absolute;
      background-color: $sea-bright-white;
      border-radius: 10px;
      padding: 20px;
      text-align: justify;
      min-width: 250px;
      @include med {
        min-width: 200px;
        max-width: 350px;
        z-index: 2000;
      }
      @include small {
        left: -150px;
        max-width: 200px;
        min-width: 100px;
      }
    }
  }
</style>

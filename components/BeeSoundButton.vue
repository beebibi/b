<template lang="html">
  <div
    class="bee-sound-btn">
    <div class="outer">
      <div
        class="inner"
        @click="updateActive">
        <bee-icon/>
      </div>
    </div>
  </div>
</template>

<script>
import BeeIcon from '@/components/BeeIcon'

export default {
  components: {
    BeeIcon
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateActive() {
      this.$root.$emit('update-active')
      // this.toggleActive()
    }
  }
}
</script>

<style scoped lang="scss">
.bee-sound-btn {
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 0;
  padding: 0 0 21px 26px;
  z-index: 1000;
  overflow: hidden;
  // display: none;
  .inner {
    cursor: pointer;
    // opacity: 0;
    transition: transform 0.666s cubic-bezier(0, 0.33, 0.2, 1) 0.999s;
    transform: translateY(0%);
  }
  .outer {
    transition: transform 0.222s cubic-bezier(0, 0.33, 0.2, 1);
    transform: rotate(0deg);
  }
  &.activeBtn {
    .inner {
      transform: translateY(0%);
    }
  }
  &.activeBtn {
    .outer {
      transform: rotate(45deg);
    }
  }
  &.init .inner {
    transform: translateY(200%);
  }
  &.beeless {
    display: none;
    @include tablet {
      display: inherit;
    }
  }
  // @include tablet {
  //   display: initial;
  // }
}
</style>

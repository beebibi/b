<template>
  <transition
    name="fadeRight"
    mode="out-in"
    appear
  >
    <div
      class="messenger"
      @click="revokeMsg"
    >
      <div class="inner">
        <span>
          {{ message }}
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: 'Thank You!'
    }
  },
  methods: {
    revokeMsg() {
      this.$root.$emit('revoke-msg')
    }
  }
}
</script>

<style scoped lang="scss">
.messenger {
  position: absolute;
  bottom: 80px;
  right: 35px;
  z-index: 1000;
  cursor: pointer;
  .inner {
    transform: translateX(150%);
    @include animation(
      fadeInAndOutAd,
      13.333s,
      0.666s,
      cubic-bezier(0, 0.33, 0.2, 1),
      1,
      forwards,
      none
    );
  }
}

.inner {
  display: block;
  width: 118px;
  height: auto;
  font-size: $h7;
  font-weight: $bold;
  text-align: center;
  padding: 18px 0;
  margin: 0;
  color: $white;
  // border: 2px solid $muted;
  background: $brand;
  border-radius: 4px;
  user-select: none;
}

@keyframes fadeInAndOutAd {
  0% {
    opacity: 0;
    transform: translateX(150%);
  }
  3% {
    opacity: 1;
    transform: translateX(0%);
  }
  40% {
    opacity: 1;
    transform: translateX(0%);
  }
  43% {
    opacity: 0;
    transform: translateX(150%);
  }
  100% {
    opacity: 0;
    transform: translateX(150%);
  }
}
</style>

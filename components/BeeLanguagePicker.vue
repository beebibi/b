<template>
  <div
    class="language-picker"
    @click="translate()"
  >
    <span
      v-if="isHebrew"
    >
      English
    </span>
    <span
      v-else
      lang="he"
      dir="rtl"
      class="rtl"
    >
      עברית
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    isHebrew() {
      return this.$store.state.isHebrew
    }
  },
  methods: {
    translate() {
      this.$store.commit('translate')
    }
  }
}
</script>

<style scoped lang="scss">
.language-picker {
  display: inline-block;
  position: absolute;
  // top: 25px;
  // right: 30px;
  bottom: 10vh;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 18px;
  color: $brand;
  // background: $muted;
  border: 2px solid $brand;
  border-radius: 50px;
  z-index: 1000;
  cursor: pointer;
  user-select: none;
  .rtl {
    font-weight: 900;
    font-size: 12px;
    line-height: 12px;
  }
}

.preLaunch .language-picker {
  @include animation(
    fadeOut,
    0.333s,
    0.111s,
    cubic-bezier(0.55, 0.22, 0.5, 0.94),
    1,
    forwards,
    forwards
  );
}
</style>

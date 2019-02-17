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
  top: 25px;
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 18px;
  right: 30px;
  color: $white;
  background: $muted;
  // border: 1px solid $muted;
  border-radius: 50px;
  z-index: 1000;
  cursor: pointer;
  user-select: none;
  .rtl {
    font-weight: 300;
    font-size: 13px;
    line-height: 13px;
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

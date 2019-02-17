<template>
  <span
    v-if="isHebrew"
    lang="he"
    dir="rtl"
    class="rtl"
  >
    {{ hebrew }}
  </span>
  <span v-else>
    {{ english }}
  </span>
</template>

<script>
export default {
  props: {
    hebrew: {
      type: String,
      default: null
    },
    english: {
      type: String,
      default: null
    }
  },
  computed: {
    isHebrew() {
      return this.$store.state.isHebrew
    }
  }
}
</script>

<style lang="scss">
.rtl {
  font-family: $font-he;
}
</style>

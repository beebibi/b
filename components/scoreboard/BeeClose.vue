<template>    
  <!-- Icon: David Star -->
  <icon
    class="icon-star"
    icon-name="icon-star"
    icon-color="transperant"
    @click.native="updateActive">
    <icon-star/>
  </icon>

</template>

<script>
import Icon from '@/components/icons/Icon'
import IconStar from '@/components/icons/IconStar'

export default {
  components: {
    Icon,
    IconStar
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
.icon-star {
  position: absolute;
  top: -18px;
  right: -12px;
  width: 18px;
  height: 18px;
  fill: $muted;
  cursor: pointer;
  transition: all 0.2s ease;
  transform: rotate(0) translate(0, 0);
  &:hover {
    fill: $brand;
    transform: rotate(120deg) translate(2px, 1px);
  }
}
</style>

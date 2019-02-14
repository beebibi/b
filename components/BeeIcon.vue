<template lang="html">
  <icon
    :width="iconWidth" 
    :height="iconHeight"
    :icon-color="iconColor"
    class="bee"
    icon-name="bee"
  >
    <icon-bee />
  </icon>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconBee from '@/components/icons/IconBee'

export default {
  components: {
    Icon,
    IconBee
  },
  props: {
    iconWidth: {
      type: String,
      default: '50'
    },
    iconHeight: {
      type: String,
      default: '50'
    },
    iconColor: {
      type: String,
      default: 'transperant'
    }
  }
}
</script>

<style scoped lang="scss">
.bee {
  padding-top: 13px;
  fill: $brand;
  @include animation(
    buzz,
    6.6s,
    0s,
    cubic-bezier(0, 0.33, 0.2, 1),
    infinite,
    none,
    hidden
  );
}

@keyframes buzz {
  0% {
    transform: rotate(0deg);
  }
  0.5% {
    transform: rotate(-13deg);
  }
  1% {
    transform: rotate(13deg);
  }
  1.5% {
    transform: rotate(-13deg);
  }
  2% {
    transform: rotate(13deg);
  }
  2.5% {
    transform: rotate(-13deg);
  }
  3% {
    transform: rotate(13deg);
  }
  3.5% {
    transform: rotate(-13deg);
  }
  4% {
    transform: rotate(13deg);
  }
  4.5% {
    transform: rotate(-13deg);
  }
  5% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>

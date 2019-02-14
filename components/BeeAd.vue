<template>
  <div
    v-if="!removeAd"
    class="container">
    <div class="bee-ad">
      <div class="inner">
        <a href="mailto:tlvdllc@gmail.com">Advertise</a>
        <span @click="removeAd = true">x</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animate: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      removeAd: ''
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  bottom: 80px;
  padding-top: 20px;
  padding-right: 35px;
  width: auto;
  right: 0;
  z-index: 1000;
  overflow: hidden;
}
.bee-ad {
  position: relative;
  // bottom: 80px;
  // right: 35px;
  z-index: 1000;
  // overflow: hidden;
  .inner {
    transform: translateX(150%);
    @include animation(
      fadeInAndOutAd,
      23.333s,
      3.333s,
      cubic-bezier(0, 0.33, 0.2, 1),
      1,
      forwards,
      none
    );
  }
  // transition: all 1s 2s cubic-bezier(0, 0.33, 0.2, 1);
  // &.animate {
  //   right: 35px;
  // }
}

a {
  display: block;
  width: 118px;
  height: 88px;
  font-size: $h7;
  text-align: center;
  padding-top: 32px;
  margin: 0;
  color: lighten($muted, 10);
  border: 2px solid $muted;
  background: rgba($brand, 0.05);
  border-radius: 2px;
  user-select: none;
  &:hover {
    color: $brand;
    background: rgba($brand, 0);
  }
}

span {
  position: absolute;
  top: -8px;
  right: -8px;
  line-height: 13px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: $h8;
  border: 2px solid $muted;
  font-weight: $bold;
  color: lighten($muted, 0);
  background: $background;
  cursor: pointer;
  user-select: none;
  &:hover {
    color: $brand;
    background: rgba($brand, 0);
    border-color: $brand;
  }
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

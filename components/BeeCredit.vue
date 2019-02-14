<template>
  <div
    class="bee-credit">
    <div class="inner">
      <a
        href="https://www.facebook.com/tlvdllc"
        target="_blank">
        <icon-tlvd-parent
          class="icon-tlvd-child"
          icon-name="icon-child"
          width="78px" 
          height="78px">
          <icon-tlvd-child />
        </icon-tlvd-parent>
      </a>
    </div>
  </div>
</template>

<script>
import IconTlvdParent from '@/components/icons/IconTlvdParent'
import IconTlvdChild from '@/components/icons/IconTlvdChild'

export default {
  components: {
    IconTlvdParent,
    IconTlvdChild
  }
}
</script>

<style scoped lang="scss">
.bee-credit {
  position: absolute;
  left: calc(50% - 39px);
  bottom: 10vh;
  // overflow: hidden;
  .inner {
    @include animation(
      animateFadeInUp,
      0.666s,
      0s,
      cubic-bezier(0, 0.33, 0.2, 1),
      1,
      forwards,
      forwards
    );
  }
  &:hover {
    svg g {
      fill: darken($muted, 2);
    }
  }
}

.inner {
  svg g {
    fill: darken($muted, 5);
  }
}

.container.preLaunch {
  .inner {
    @include animation(
      fadeOut,
      0.444s,
      0,
      cubic-bezier(0.55, 0.22, 0.5, 0.94),
      1,
      forwards,
      forwards
    );
  }
}

@keyframes animateFadeInUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  33% {
    opacity: 100;
  }
  100% {
    transform: translateY(0%);
    opacity: 100;
  }
}
</style>

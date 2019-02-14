<template lang="html">
  <div class="container">
    <div class="bee-outer">
      <div
        class="bee-inner"
        @click="releaseBees">
        <bee-icon/>
      </div>
    </div>
    <div class="cta">
      <p>Release the Bees<br>(and Bibi)</p>
    </div>
    <bee-credit />
  </div>
</template>

<script>
import BeeIcon from '@/components/BeeIcon'
import BeeCredit from '@/components/BeeCredit'

export default {
  components: {
    BeeIcon,
    BeeCredit
  },
  methods: {
    releaseBees() {
      this.$root.$emit('release-bees')
    }
  }
}
</script>

<style scoped lang="scss">
.bee {
  width: 74px;
  height: 74px;
  position: relative;
  top: -2px;
  fill: $brand;
  @include animation(
    buzz,
    2.666s,
    0s,
    cubic-bezier(0, 0.33, 0.2, 1),
    infinite,
    none,
    hidden
  );
}

.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  @include gradient($background, $background-alt);
  &.preLaunch {
    .bee-outer {
      @include animation(
        animateBeeOut,
        0.999s,
        0.666s,
        cubic-bezier(0, 0.33, 0.2, 1),
        1,
        forwards,
        forwards
      );
    }
    .bee-inner {
      @include animation(
        animateBeeOutRotate,
        0.222s,
        0.333,
        cubic-bezier(0, 0.33, 0.2, 1),
        1,
        forwards,
        forwards
      );
    }
    .cta {
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
  }
}

.bee-inner {
  cursor: pointer;
}

.cta {
  @include animation(
    fadeInFromBottom,
    1.333s,
    0.333,
    cubic-bezier(0, 0.33, 0.2, 1),
    1,
    forwards,
    forwards
  );
  p {
    text-align: center;
    font-weight: $bold;
    font-size: $h9;
    letter-spacing: 4px;
    margin-top: 10px;
    color: $muted-alt;
    text-transform: uppercase;
  }
}

@keyframes animateBeeOutRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}

@keyframes animateBeeOut {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(2000%, -1000%);
  }
}

@keyframes buzz {
  0% {
    transform: rotate(0deg);
  }
  79% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(13deg);
  }
  81% {
    transform: rotate(-13deg);
  }
  82% {
    transform: rotate(13deg);
  }
  83% {
    transform: rotate(-13deg);
  }
  84% {
    transform: rotate(13deg);
  }
  85% {
    transform: rotate(-13deg);
  }
  86% {
    transform: rotate(13deg);
  }
  87% {
    transform: rotate(-13deg);
  }
  88% {
    transform: rotate(13deg);
  }
  89% {
    transform: rotate(-13deg);
  }
  90% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>

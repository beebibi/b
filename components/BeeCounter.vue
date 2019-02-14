<template>
  <div
    :class="[{animate: animate}, {flush: flush}]"
    class="counter"
  >
    <animated-number
      :value="counter"
      :format-value="formatNumber"
      :delay="0"
      :duration="duration"
      easing="easeOutCirc"
      class="total"
    />
    <span
      class="desc">
      {{ text }}
    </span>
  </div>
</template>

<script>
import AnimatedNumber from 'animated-number-vue'

export default {
  components: {
    AnimatedNumber
  },
  props: {
    counter: {
      type: Number,
      default: 0
    },
    fartCounter: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: 'Stings'
    },
    duration: {
      type: Number,
      default: 2666
    },
    animate: {
      type: Boolean,
      default: false
    },
    flush: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatNumber(value) {
      return `${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    }
  }
}
</script>

<style scoped lang="scss">
.counter {
  display: inline-block;
  float: left;
  text-align: left;
  font-weight: 900;
  @include fp(margin-left, 6, 12);
  position: relative;
  @include fp(top, -100, -20);
  user-select: none;
  span {
    display: block;
  }
  .total {
    @include fp(font-size, 24, 52);
    @include fp(line-height, 24, 40);
    margin-top: 100px;
    color: $white;
    &.flush,
    &.flushFart {
      color: $red;
    }
  }
  &.flush .total,
  &.flushFart .total {
    color: $red;
  }
  .desc {
    @include fp(font-size, 16, 32);
    color: #424f71;
  }
}

.counter.fart {
  text-align: right;
  float: right;
  @include fp(margin-right, 6, 12);
  .total {
    color: $brand;
    &.flushFart {
      color: $red;
    }
  }
  &.flushFart .total {
    color: $red;
  }
}
</style>

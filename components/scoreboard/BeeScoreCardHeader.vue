<template>
  <header>

    <!-- Title -->
    <h1 v-if="userScore"><span>Your</span> Score</h1>
    <h1 v-else><span>Score</span> board</h1>
    
    <!-- Icon: David Star -->
    <bee-close />
    <!-- Next: User > Top Ten -->
    <div
      v-if="userScore"
      class="next"
      @click="flipBoard"
    >
      <!-- <span>Top</span> -->
      <bee-icon
        icon-width="42"
        icon-height="42"
        icon-color="transperant"
      />
      <!-- <span>Ten</span> -->
    </div>

    <!-- Next: Top Ten > User -->
    <div
      v-else
      class="next"
      @click="flipBoard"
    >
      <!-- <span>Your</span> -->
      <bee-icon
        icon-width="42"
        icon-height="42"
        icon-color="transperant"
      />
      <!-- <span>Score</span> -->
    </div>

  </header>
</template>

<script>
import BeeIcon from '@/components/BeeIcon'
import BeeClose from '@/components/scoreboard/BeeClose'

export default {
  components: {
    BeeIcon,
    BeeClose
  },
  props: {
    userScore: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    flipBoard() {
      this.$root.$emit('flip-board')
    }
  }
}
</script>

<style scoped lang="scss">
header {
  position: relative;
  margin: 0;
  padding: 0;
  // cursor: pointer;
  h1 {
    font-size: 18px;
    line-height: 21px;
    font-weight: $bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 6px 0;
    span {
      color: $brand;
    }
  }
}

.next {
  cursor: pointer;
  span {
    position: relative;
    top: -13px;
    font-size: 10px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding: 1px;
    color: $muted;
    transition: color 0.333s ease;
  }
  .bee {
    opacity: 0.66;
    transition: opacity 0.333s ease;
  }
  &:hover {
    span {
      color: $brand;
    }
    .bee {
      opacity: 1;
    }
  }
}

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

<template>
  <div class="scoreboard user">

    <bee-score-card-header user-score />

    <div
      class="scores"
    >
      <div class="score score-stings">
        <animated-number
          :value="stings"
          :format-value="formatNumber"
          :delay="111"
          :duration="2333"
          easing="easeOutCirc"
          class="score"
        />
        <span>Stings</span>
      </div>

      <bee-score-card-divider />

      <div class="score score-farts">
        <animated-number
          :value="farts"
          :format-value="formatNumber"
          :delay="222"
          :duration="1999"
          easing="easeOutCirc"
          class="score"
        />
        <span>Farts</span>
      </div>
    </div>
    <bee-form
      :stings="stings"
      :farts="farts"
    />
  </div>
</template>

<script>
import BeeForm from '@/components/scoreboard/BeeForm'
import BeeScoreCardHeader from '@/components/scoreboard/BeeScoreCardHeader'
import BeeScoreCardDivider from '@/components/scoreboard/BeeScoreCardDivider'
import AnimatedNumber from 'animated-number-vue'

export default {
  components: {
    BeeForm,
    BeeScoreCardHeader,
    BeeScoreCardDivider,
    AnimatedNumber
  },
  props: {
    stings: {
      type: Number,
      default: 0
    },
    farts: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      errors: [],
      name: null,
      email: null
    }
  },
  methods: {
    updateActive() {
      this.$root.$emit('update-active')
      // this.toggleActive()
    },
    formatNumber(value) {
      return `${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    }
  }
}
</script>

<style scoped lang="scss">
.scores {
  @extend .flex;
  justify-content: space-around;
  margin: 0 0 20px 0;
  .score {
    display: block;
    font-size: 64px;
    line-height: 72px;
    color: $white;
    // margin: 20px 0;
  }
  span {
    display: block;
    font-size: 19px;
    line-height: 38px;
    text-transform: uppercase;
    color: $brand;
  }
}
</style>

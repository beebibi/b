<template>
  <div class="container">
    <transition
      name="flip"
      mode="out-in"
      appear>
      <keep-alive>
        <component
          :is="scoreView"
          :stings="userCounter"
          :farts="userFartCounter"
        />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import BeeUserScore from '@/components/scoreboard/BeeUserScore'
import BeeUsersScores from '@/components/scoreboard/BeeUsersScores'

export default {
  components: {
    BeeUserScore,
    BeeUsersScores
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
      scoreView1: 'BeeUserScore',
      scoreView2: 'BeeUsersScores',
      scoreView: 'BeeUserScore',
      userCounter: this.stings,
      userFartCounter: this.farts
    }
  },
  created() {
    this.$root.$on('flip-board', this.flipBoard)
  },
  methods: {
    flipBoard() {
      if (this.scoreView === this.scoreView1) {
        this.scoreView = this.scoreView2
      } else if (this.scoreView === this.scoreView2) {
        this.scoreView = this.scoreView1
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 150;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 0;
  overflow: hidden;
}

.scoreboard {
  width: 100%;
  height: 100%;
  margin: 0;
  background: #141727;
  border-radius: 18px;
  box-shadow: 0 7px 14px 0 rgba(0, 0, 0, 0.13);
  padding: 30px;
  // backface-visibility: visible !important;
  @include tablet {
    width: 366px;
    height: auto;
  }
}
</style>

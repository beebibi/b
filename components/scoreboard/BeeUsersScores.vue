<template>
  <div class="scoreboard users">

    <bee-score-card-header />

    <div
      v-if="dataReady"
      class="container"
    >
      <!-- <p> -->
      <!-- {{ totalStings }} stings and {{ totalFarts }} farts by {{ totalBees }} Bees  -->
      <!-- </p> -->
      <ul class="scores scores-title">
        <li/>
        <li/>
        <li>
          <span class="score-name">Name</span>
          <span class="score-stings">Stings</span>
          <span class="score-farts">Farts</span>
        </li>
      </ul>
      <ol
        class="scores"
        start="1"
      >
        <li
          v-for="(value, index) in scores"
          :key="index"
        >
          <span class="score-name">{{ value[0] }}</span>
          <span class="score-stings">{{ value[1] }}</span>
          <span class="score-farts">{{ value[2] }}</span>
        </li>
      </ol>
    </div>

    <!-- <bee-button -->
    <!-- class="fill" -->
    <!-- title="More" -->
    <!-- /> -->

  </div>
</template>

<script>
import BeeScoreCardHeader from '@/components/scoreboard/BeeScoreCardHeader'
// import BeeButton from '@/components/BeeButton'
import axios from 'axios'

export default {
  components: {
    BeeScoreCardHeader
    // BeeButton
  },
  data() {
    return {
      url:
        'https://sheets.googleapis.com/v4/spreadsheets/1E1envvbSPH2KYgSKkVEXGltVsPVATHvlDZlUioUPwEY/values/beeResponsesAPI!A1:C?key=AIzaSyAdmKyvi3e9dVxwoLvVkJdqD5xRNwRYveI',
      dataReady: false,
      totalBees: null,
      totalStings: null,
      totalFarts: null
      // ss: null
      // ssId: '1E1envvbSPH2KYgSKkVEXGltVsPVATHvlDZlUioUPwEY',
      // key: 'AIzaSyAdmKyvi3e9dVxwoLvVkJdqD5xRNwRYveI'
    }
  },
  // computed: {
  //   sortByStings() {
  //     var s = this.scores.value[1]
  //     return this.scores
  //       .slice()
  //       .sort((a, b) => parseFloat(a.s) - parseFloat(b.s))
  //   }
  // },
  async mounted() {
    const scores = await this.$axios.$get(this.url)
    this.dataReady = true
    this.scores = scores.values
    this.totalBees = scores.values[1][0]
    this.totalStings = scores.values[1][1]
    this.totalFarts = scores.values[1][2]
  },
  methods: {
    // sortByStings() {
    //   this.scores
    // }
  }
}
</script>

<style scoped lang="scss">
.scores {
  & > li:first-of-type, // Hide title/header and last row
  & > li:nth-of-type(2) {
    // & > li:last-of-type {
    display: none;
  }
  list-style: none;
  counter-reset: my-awesome-counter;
  margin: 0 0 0;
  padding: 0;
  li {
    counter-increment: my-awesome-counter;
    position: relative;
    color: lighten($muted-alt, 22);
    font-size: $h6;
    line-height: $h6;
    margin: 6px 0;
    padding: 4px 0;
    font-weight: 400;
    transition: all 0.666s ease;
    cursor: pointer;
    &:hover {
      color: $white;
      // background-color: $muted-alt;
    }
    &::before {
      content: counter(my-awesome-counter) ' ';
      position: absolute;
      padding-right: 18px;
    }
    .score-name {
      position: relative;
      left: 30px;
    }
    .score-stings {
      position: absolute;
      right: 60px;
    }
    .score-farts {
      float: right;
    }
  }
  &.scores-title {
    margin: 30px 0 10px;
    li {
      font-size: 11px;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: $brand;
      cursor: default;
      padding: 0;
      &:hover {
        color: $brand;
      }
      &::before {
        display: none;
      }
    }
  }
}

.legal {
  font-size: $h6;
}
</style>

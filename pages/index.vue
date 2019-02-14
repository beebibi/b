<template>
  <section class="main">

    <!-- Bee Animation after page load -->
    <bee-loading-indicator
      v-if="initLaunch"
      :class="{preLaunch: preLaunch}"
    />

    <!-- <bee-users-scores /> -->

    <!-- Bee Active/Sound Controler -->
    <bee-sound-button
      :class="[{activeBtn: activeBtn}, {init: initBtn}, {beeless: !active}]"
      @click="active = !active"
    />

    <!-- Bee User Score + Send Score Form -->
    <transition
      name="pop"
      mode="out-in"
      appear
    >
      <bee-scores
        v-if="!active && !initForm"
        :stings="userCounter"
        :farts="userFartCounter"
      />
    </transition>

    <!-- Header: Title + Counters -->
    <header>
      <!-- Title -->
      <transition
        name="slideDown"
        mode="out-in"
        appear
      >
        <bee-title
          v-if="active"
        />
      </transition>

      <!-- Counter: Stings -->
      <transition
        name="fadeRightUp"
        mode="out-in"
        appear
      >
        <bee-counter
          v-if="active"
          :counter="counter"
          :class="{flush: flush}"
        />
      </transition>

      <!-- Counter: Farts -->
      <transition
        name="fadeLeftUp"
        mode="out-in"
        appear
      >
        <bee-counter
          v-if="active"
          :text="'Farts'"
          :counter="fartCounter"
          :duration="duration"
          :class="{flushFart: flushFart}"
          class="fart"
        />
      </transition>
    </header>

    <!-- Social Icons -->
    <!-- <transition -->
    <!-- name="fadeRight" -->
    <!-- mode="out-in" -->
    <!-- appear -->
    <!-- > -->
    <!-- <bee-social v-if="active" /> -->
    <!-- </transition> -->

    <!-- Ad Space -->
    <transition
      name="fadeRight"
      mode="out-in"
      appear
    >
      <bee-ad v-if="activeAd" />
    </transition>

    <!-- Ad Space -->
    <bee-messenger v-if="activeMsg" />

    <!-- BIBI -->
    <!-- Bibi : Face Overlay -->
    <transition
      name="slideUp"
      mode="out-in"
      appear
    >
      <div
        v-if="active"
        id="bibi"
      >
        <div
          v-hammer:tap="click"
          v-hammer:press="press"
          v-show="faceOverlay"
          :class="{activeFace: activeFace}"
          class="bibi-face"
        />
        <!-- Bibi : Body [Main Image] -->
        <div
          :class="faceClass"
          class="bibi-body"
        />
      </div>
    </transition>

    <!-- Bees via Particles.js -->
    <bee-particles v-if="active"/>

  </section>
</template>

<script>
import BeeTitle from '@/components/BeeTitle'
import BeeParticles from '@/components/BeeParticles'
import BeeSoundButton from '@/components/BeeSoundButton'
import BeeLoadingIndicator from '@/components/BeeLoadingIndicator'
// import BeeSocial from '@/components/BeeSocial'
import BeeCounter from '@/components/BeeCounter'
import BeeAd from '@/components/BeeAd'
import BeeMessenger from '@/components/BeeMessenger'
import BeeScores from '@/components/scoreboard/BeeScores'
// import BeeUsersScores from '@/components/BeeUsersScores'
import {Howl, Howler} from 'howler'

export default {
  layout: 'home',
  components: {
    BeeTitle,
    BeeParticles,
    BeeSoundButton,
    BeeLoadingIndicator,
    // BeeSocial,
    BeeCounter,
    BeeAd,
    BeeMessenger,
    BeeScores
    // BeeUsersScores
  },
  head() {
    return {
      title: 'Bee Bibi'
    }
  },
  data() {
    return {
      counter: 158666,
      fartCounter: 45826,
      userCounter: 0,
      userFartCounter: 0,
      active: false,
      activeBtn: false,
      activeMsg: false,
      activeAd: false,
      initLaunch: true,
      initBtn: true,
      initForm: true,
      activeFace: false,
      flush: false,
      flushFart: false,
      duration: 2333, // Animated Numbers
      faceOverlay: false,
      faceClass: '',
      stingOptions: [this.stingOption1, this.stingOption2],
      stingOption: '',
      preLaunch: false,
      sfxBees: new Howl({
        src: ['./audio/sfxBees.webm', './audio/sfxBees.mp3'],
        loop: true,
        autoSuspend: false,
        sprite: {
          bees: [500, 18000]
        }
      }),
      sfxSting1: new Howl({
        src: ['./audio/sfxSting1.webm', './audio/sfxSting1.mp3']
      }),
      sfxSting2: new Howl({
        src: ['./audio/sfxSting2.webm', './audio/sfxSting2.mp3']
      }),
      sfxFart1: new Howl({
        src: ['./audio/sfxFart.webm', './audio/sfxFart.mp3']
      })
    }
  },
  created() {
    this.$root.$on('update-active', this.toggleActive)
    this.$root.$on('update-score', this.formConfirmation)
    this.$root.$on('release-bees', this.releaseBees)
    this.$root.$on('revoke-msg', this.revokeMsg)
    this.sfxBees.load('bees')
    Howler.autoSuspend = false
  },
  methods: {
    click() {
      this.activeFace = false
      this.flush = true
      setTimeout(() => (this.activeFace = true), 1)
      // setTimeout(() => (this.animate = true), 1)
      this.sting()
      this.counter += 1
      this.userCounter += 1
      setTimeout(() => (this.activeFace = false), 222)
      setTimeout(() => (this.flush = false), 222)
      setTimeout(() => (this.faceClass = ''), 222)
    },
    press() {
      this.activeFace = false
      this.fartCounter += 1
      this.userFartCounter += 1
      this.flushFart = true
      setTimeout(() => (this.activeFace = true), 1)
      this.fart()
      setTimeout(() => (this.activeFace = false), 666)
      setTimeout(() => (this.flushFart = false), 666)
      setTimeout(() => (this.faceClass = ''), 666)
    },
    stingOption1: function(event) {
      this.faceClass = 'bibi-pain-1'
      this.sfxSting1.currentTime = 0
      this.sfxSting1.play()
    },
    stingOption2: function(event) {
      this.faceClass = 'bibi-pain-2'
      this.sfxSting2.currentTime = 0
      this.sfxSting2.play()
    },
    fart: function(event) {
      this.faceClass = 'bibi-sfxFart'
      this.sfxFart1.play()
    },
    toggleActive() {
      this.sfxBees.play('bees')
      this.activeAd = false
      if (this.active) {
        this.activeBtn = false
        this.sfxBees.volume(0)
        this.sfxBees.unload('bees')
        setTimeout(() => this.sfxBees.load('bees'), 1)
        this.active = false
      } else {
        this.sfxBees.volume(1)
        this.active = true
        this.activeBtn = true
      }
    },
    formConfirmation() {
      this.userCounter = 0
      this.userFartCounter = 0
      this.activeMsg = true
      setTimeout(() => (this.activeMsg = false), 10000)
    },
    revokeMsg() {
      this.activeMsg = false
    },
    releaseBees() {
      this.preLaunch = true
      setTimeout(() => this.sfxBees.play('bees'), 666)
      setTimeout(() => (this.active = true), 777)
      setTimeout(() => (this.activeBtn = true), 777)
      setTimeout(() => (this.initBtn = false), 777)
      setTimeout(() => (this.faceOverlay = true), 777)
      setTimeout(() => (this.activeAd = true), 777)
      setTimeout(() => (this.initForm = false), 999)
      setTimeout(() => (this.initLaunch = false), 999)
    },
    // The random function
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    sting: function(event) {
      // get a reference to a random API
      var option = this.stingOptions[
        this.randomNumber(0, this.stingOptions.length)
      ]
      var stingOption = option()
    }
  }
}
</script>

<style scoped lang="scss">
header {
  @extend .center-abs;
  padding: 0;
  @include fp(margin-top, 0, 100);
  z-index: -1;
  // width: 80%;
}

#bibi {
  position: absolute;
  width: 100%;
  height: 100%;
  // z-index: 1000;
}
.bibi-face {
  position: absolute;
  left: 49%;
  transform: translate(-49%, 0);
  @include fp(bottom, 70, 130);
  @include fp(height, 240, 500);
  @include fp(width, 200, 350);
  border-radius: 100%;
  // background: transparent;
  // background: rgba(red, 0.5); // Debug face overlay
  cursor: pointer;
  z-index: 150;
  user-select: none;
  &.activeFace {
    z-index: 50;
  }
  @include landscape {
    @include fp(bottom, 30, 70);
    @include fp(height, 150, 280);
    @include fp(width, 100, 230);
  }
}

.bibi-body {
  // position: absolute;
  background-image: url('~assets/images/bibi-1.png');
  background-position: 50% 100.5%;
  @include fp(background-size, 500, 1050);
  background-repeat: no-repeat;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  @include landscape {
    @include fp(background-size, 300, 500);
  }
}

.bibi-pain-1,
.bibi-pain-2,
.bibi-sfxFart {
  @extend .bibi-body;
  background-position: 50% 103%;
}

.bibi-pain-1 {
  background-image: url('~assets/images/bibi-2.png');
}

.bibi-pain-2 {
  background-image: url('~assets/images/bibi-3.png');
}

.bibi-sfxFart {
  background-image: url('~assets/images/bibi-4.png');
}
</style>

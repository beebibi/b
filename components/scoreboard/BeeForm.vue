<template>
  <form
    ref="formElement"
    class="form"
    autocomplete="on"
    @submit.prevent="response"
  >
    <!-- Form: Username -->
    <div class="form-group">
      <input
        v-model="name"
        type="text"
        required="required"
        class="form-control"
        name="entry.1373336567"
        placeholder="Name"
      >
    </div>

    <!-- Form: Email -->
    <div class="form-group">
      <input
        v-model="email"
        type="text"
        required="required"
        class="form-control"
        name="entry.2052814884"
        placeholder="Email"
      >
    </div>


    <!-- Form: Stings -->
    <div class="form-group">
      <input
        :value="stings"
        type="hidden"
        class="form-control"
        name="entry.665828190"
      >
    </div>

    <!-- Form: Farts -->
    <div class="form-group">
      <input
        :value="farts"
        type="hidden"
        class="form-control"
        name="entry.458818421"
      >
    </div>

    <p class="legal">
      <bee-translator
        :hebrew="'שילוב תוצאות קודמות נעשה ע״י שימוש חוזר של הדוא״ל שלך. כתובות דוא״ל נשארות חסויות ולעולם לא יפורסמו.'"
        :english="'If previuosly submitted Email is used, your scores will be combined. Emails are never published.'"
      />
    </p>

    <bee-button
      v-if="isHebrew"
      id="contact-form-submit"
      :disabled="disableStatus()"
      :button-class="isEmailValid()"
      class="fill"
      title="שלח/י תוצאה"
    />

    <bee-button
      v-else
      id="contact-form-submit"
      :disabled="disableStatus()"
      :button-class="isEmailValid()"
      class="fill"
      title="Send Score"
    />

  </form>
</template>

<script>
import BeeButton from '@/components/BeeButton'
import BeeTranslator from '@/components/BeeTranslator'

import axios from 'axios'

export default {
  components: {
    BeeButton,
    BeeTranslator
    // axios
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
      email: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      isDisabled: true
    }
  },
  computed: {
    isHebrew() {
      return this.$store.state.isHebrew
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName
    },
    email(newEmail) {
      localStorage.email = newEmail
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name
    }
    if (localStorage.email) {
      this.email = localStorage.email
    }
  },
  methods: {
    isEmailValid: function() {
      return this.email == ''
        ? ''
        : this.reg.test(this.email)
          ? 'valid-email'
          : 'invalid-email'
    },
    disableStatus: function() {
      return this.email == ''
        ? ''
        : this.reg.test(this.email)
          ? null
          : 'disabled'
    },
    response() {
      var vm = this
      var formElement = vm.$refs.formElement
      var formData = new FormData(formElement)
      var updateActive = this.$root.$emit('update-active')
      var updateScore = this.$root.$emit('update-score')
      var emitEvent = dataLayer.push({event: 'formSubmit'})
      var url =
        'https://docs.google.com/forms/d/e/1FAIpQLScsRimfgsVx2FS-ThJjqDarMssOEH0VWa6qVnCkqXRhSMISgA/formResponse'
      this.errors = []
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Invalid')
      } else {
        axios
          .post(url, formData)
          .then(function(response) {
            updateActive
            updateScore
            emitEvent
          })
          .catch(function(error) {
            updateActive
            updateScore
            emitEvent
          })
      }
    },
    validEmail: function(email) {
      return this.reg.test(this.email)
    }
  }
}
</script>

<style scoped lang="scss">
.legal {
  font-size: $h8;
  margin: 0;
  color: $form-legal-text;
  span {
    color: lighten($muted, 11);
    &.rtl {
      // direction: rtl;
      text-align: right;
      // unicode-bidi: embed;
      float: right;
      margin-bottom: 20px;
    }
  }
}
</style>

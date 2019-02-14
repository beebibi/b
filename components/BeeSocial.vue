<template lang="html">
  <div class="bee-social">
    <a
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fbeebibi.com"
      target="_blank"
      class="container">
      <icon
        class="icon-facebook"
        icon-name="icon-facebook"
        width="16px" 
        height="16px" 
        icon-color="#2F4889">
        <icon-facebook />
      </icon>
    </a>
    <a
      href="https://twitter.com/intent/tweet?text=To%20Bee%20or%20not%20to%20Bibi?%20http://pic.twitter.com/72HAkdydu%20&hashtags=BeeBibi&url=https://beebibi.com"
      target="_blank"
      class="container">
      <icon
        class="icon-twitter"
        icon-name="icon-twitter"
        width="16px" 
        height="16px" 
        icon-color="#2F4889">
        <icon-twitter/>
      </icon>
    </a>
    <a
      href="#"
      target="_blank"
      class="container">
      <icon
        class="icon-instagram"
        icon-name="icon-instagram"
        width="16px" 
        height="16px" 
        icon-color="#2F4889">
        <icon-instagram/>
      </icon>
    </a>
    <!-- <a -->
    <!-- id="tlvd" -->
    <!-- href="https://www.facebook.com/tlvdllc" -->
    <!-- target="_blank" -->
    <!-- > -->
    <!-- tlvd -->
    <!-- </a> -->
  </div>
</template>

<script>
import Icon from '@/components/icons/Icon'
import IconFacebook from '@/components/icons/IconFacebook'
import IconTwitter from '@/components/icons/IconTwitter'
import IconInstagram from '@/components/icons/IconInstagram'

export default {
  components: {
    Icon,
    IconFacebook,
    IconTwitter,
    IconInstagram
  }
}
</script>

<style scoped lang="scss">
svg {
  fill: $white;
}
.container {
  display: inline-block;
  padding: 10px;
  border: 2px solid $muted;
  margin-left: -7px;
}
.bee-social {
  position: absolute;
  bottom: 0;
  right: 0;
  line-height: 0;
  padding: 0 36px 24px 8px;
  z-index: 1000;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  .container:first-child {
    border-radius: 2px 0 0 2px;
  }
  .container:last-child {
    border-radius: 0 2px 2px 0;
  }
  &:hover {
    .container {
      border: 2px solid $brand;
      &:hover {
        background: $brand;
        svg g {
          fill: $white;
        }
      }
    }
    svg g {
      fill: $brand;
    }
  }
}
#tlvd {
  position: absolute;
  bottom: 13px;
  right: 35px;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  color: $muted;
  &:hover {
    color: $white;
  }
}
</style>

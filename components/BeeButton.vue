<template>
  <button
    :class="buttonClass"
    type="submit"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  // name: 'btn'
  props: {
    title: {
      type: String,
      default: 'Press'
    },
    buttonClass: {
      type: String,
      default: 'fill-c'
    }
  }
}
</script>

<style scoped lang="scss">
// Hide :focus outline on Chrome
button:focus {
  outline: 0;
}

// Using default color and size.
button {
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  text-transform: uppercase;
  margin: 1rem * $golden auto;
  border-radius: 50px;
  font-weight: 900;
  line-height: $line-height;
  border: 2px solid;
  transition: all 0.1s ease-in-out;
  letter-spacing: 2px;
  font-size: 13px;
  padding: 10px 32px;
  width: 100%;
}

// // ==================================================================
// // Button Colors
// //
.fill {
  color: rgba($muted, 1);
  background: rgba($muted, 0.33);
  border-color: rgba($muted, 0);
  &:hover {
    background: rgba($muted, 0.36);
  }
}

.fill-c {
  color: rgba($white, 1);
  background: rgba($brand, 1);
  border-color: rgba($brand, 0);
  &:hover {
    background: darken($brand, 3);
  }
}

.valid-email {
  @extend .fill-c;
}

.invalid-email {
  @extend .fill;
  cursor: not-allowed;
}

// .line {
//   // font-weight: 600;
//   color: rgba($black, 1);
//   background: none;
//   border-color: rgba($black, 1);
//   &:hover {
//     border-color: rgba($black, 0.8);
//     background: none;
//   }
// }

// .line-c {
//   // font-weight: 600;
//   color: rgba($brand, 1);
//   background: none;
//   border-color: rgba($brand, 1);
//   &:hover {
//     border-color: rgba($brand, 0.8);
//     background: none;
//   }
// }

// .line-w {
//   font-weight: 400;
//   color: rgba($white, 1);
//   background: none;
//   border: 1px solid;
//   border-color: rgba($white, 1);
//   padding: 8px 66px;
//   &:hover {
//     border-color: rgba($white, 0.8);
//     background: none;
//   }
// }
</style>

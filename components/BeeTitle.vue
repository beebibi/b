<template>
  <div class="title">
    <h1><span>Bee</span>Bibi</h1>
  </div>
</template>

<style scoped lang="scss">
.title {
  display: block;
  width: 100%;
}
h1 {
  font-family: $font;
  @include fp(font-size, 70, 240);
  @include fp(letter-spacing, -2, -6);
  line-height: 100px;
  font-weight: 900;
  user-select: none;
  margin: 0;
  color: $white;
  // display: inline-block;
  // text-transform: uppercase;
  span {
    color: $brand;
  }
}
</style>

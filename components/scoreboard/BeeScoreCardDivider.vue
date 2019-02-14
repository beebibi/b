<template>
  <div class="divider">
    <span class="arrow" />
  </div>
</template>

<style scoped lang="scss">
.divider {
  display: block;
  width: 0px;
  height: 100px;
  margin-top: 5px;
  // background: $muted-alt;
  border-width: 0.5px;
  border-color: $form-input-border;
  border-style: dashed;
  position: absolute;
  left: 50%;
  .arrow {
    position: absolute;
    bottom: 0;
    left: -6px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 12px solid darken($form-input-border, 6);
  }
}
</style>

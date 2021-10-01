<template>
  <div class="itemm">
    <img class="itm" :src="require('../images/' + item.image)" />
    <div class="title">
      <p class="m-0">{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped>
.title {
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 9px 9px;
  opacity: 0.83;
  position: absolute;
  bottom: 0;
  padding-top: 5px;
  font: normal normal bold 14px/19px Roboto;
  letter-spacing: 0.11px;
  color: #0a1f44;
}

.itemm {
  margin: 0;
  width: 150%;
  position: relative;
}

.itm {
  width: 100%;
}
</style>

<template>
  <div>
    <img :src="require('../images/' + item.image)" />
    <!-- <div class="card-body"> -->
    <!-- <img src="../images/exclaimation.svg" /> -->
  </div>
  <div class="title">{{ item.name }}</div>
  <!-- <div class="card-tag mt-5 ">
        <p class="card-price m-0">$ {{ item.price }}</p>
        <p class="card-customizable m-0" v-if="item.customizable">
          Customizable
        </p>
      </div> -->
  <!-- </div> -->
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style scoped>
.wrapper {
  width: 95%;
}
.title {
  width: 163px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 9px 9px;
  opacity: 0.83;
}

</style>

<template>
  <div class="wrapper card">
    <img class=" card-img-top" :src="require('../images/' + item.image)" />
    <div class="card-body">
      <div class="card-title d-flex justify-content-between align-items-center">
        <p class="m-0">{{ item.name }}</p>
        <img src="../images/exclaimation.svg" />
      </div>
      <div class="card-tag mt-5 ">
        <p class="card-price m-0">$ {{ item.price }}</p>
        <p class="card-customizable m-0" v-if="item.customizable">
          Customizable
        </p>
      </div>
    </div>
  </div>
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
.card-title img {
  height: 20px;
}
.card-customizable {
  font-size: 0.8rem;
}
</style>

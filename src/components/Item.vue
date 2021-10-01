<template>
  <div class="card">
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
      <div v-if="item.customizable">
        <img src="../images/items-group.svg" />
      </div>
      <div v-else>
        <img src="../images/items-group.svg" />
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
.card {
  width: 95%;
  border-radius: 10px;
}
.card-title img {
  height: 20px;
}
.card-customizable {
  font-size: 0.8rem;
}
</style>

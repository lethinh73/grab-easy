<template>
  <div class="modal-dialog fixed-bottom">
    <div class="modal-content d-flex ">
      <div class="modal-body px-3 py-5 d-flex flex-column align-items-center">
        <div class="container p-0 d-flex">
          <img class="item-img" :src="require('../images/' + item.image)" />
          <div class="container">
            <p class="fw-bold mt-2 mb-1">{{ item.name }}</p>
            <p class="item-description mb-1">
              Item description will be shown here, in full length for
              recommended section.
            </p>
            <p class="fw-bold mb-1">$ {{ item.price }}</p>
            <p v-if="item.customizable" class="item-customizable mb-1">
              Customizable
            </p>
          </div>
        </div>
        <button type="button" class="btn mt-3" data-bs-dismiss="modal">
          DONE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
  props: ["item"],
  mounted() {
    console.log(this.item);
  },
};
</script>

<style scoped>
.modal-dialog {
  width: 100%;
  max-width: 420px;
  margin: auto;
}
.modal-content {
  border-radius: 12px 12px 0 0;
}
.modal-body .container {
  border-radius: 8px;
}
.item-img {
  width: 40%;
}
.item-description {
  font-size: 10px;
  color: #616b71;
}
.item-customizable {
  font-size: 9px;
}
.btn {
  background-color: #521d0d;
  color: white;
  width: 60%;
  border-radius: 8px;
}
</style>

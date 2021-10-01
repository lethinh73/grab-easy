<template>
  <div class="card">
    <img class=" card-img-top" :src="require('../images/' + item.image)" />
    <div class="card-body">
      <div class="card-title d-flex justify-content-between align-items-center">
        <p class="m-0">{{ item.name }}</p>
        <img
          src="../images/exclaimation.svg"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#item-description"
        />
      </div>
      <div
        class="modal fade"
        id="item-description"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Description :item="item" />
      </div>
      <div class="card-tag mt-5 ">
        <p class="card-price m-0">$ {{ item.price }}</p>
        <p class="card-customizable m-0" v-if="item.customizable">
          Customizable
        </p>
      </div>

      <div v-if="item.customizable" class="add-btn">
        <img
          src="../images/items-group.svg"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#info-modal"
        />
      </div>
      <div v-else class="add-btn">
        <img src="../images/items-btn-add.svg" />
        <div class="btn-non-customized">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <div
        class="modal fade"
        id="info-modal"
        tabindex="-1"
        aria-labelledby="info-modal-label"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="info-modal-label">
                NAME OF THE DISH
              </h5>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                ADD ITEM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Description from "../components/Description.vue";
export default {
  props: ["item"],
  components: { Description },
  data() {
    return {
      count: 1,
      item: this.props.item,
    };
  },
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
.add-btn {
  position: absolute;
  bottom: 3px;
  right: 3px;
}
.btn-non-customized {
  position: absolute;
  top: 1px;
  left: 7px;
}
.btn-non-customized button {
  border: none;
  margin: 2px;
  background: transparent;
  font-size: 1.2rem;
}
</style>

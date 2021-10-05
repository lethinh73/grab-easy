<template>
  <div class="card w-90">
    <div class="row">
      <div class="col-3">
        <img src="../images/myorders/pizza.png" style="width: 90px; height: auto;" alt="pizza" />
      </div>
      <div class="col-9">
        <h3>The Pizza Place</h3>
        <p>Ordered Time : 20:36 | Order ID : 3456 | Items : Cheese Garlic Bread</p>
        <button v-on:click="toggleInformation()">
          <img src="../images/myorders/status.svg" alt="status" />
        </button>
      </div>
    </div>
  </div>
  <div class="card w-90 toggleItem hide" v-bind="{ id }">
    <span
      ><input type="radio" name="" id=""/> {{ txt }}
      <button v-on:click="toggleInformation()">
        <img src="../images/myorders/confirmed.svg" alt="status" /></button
    ></span>
  </div>
</template>

<script>
let toggle = false;

export default {
  props: ["txt", "id"],
  methods: {
    toggleInformation: function() {
      if (toggle) {
        document.querySelector("#" + this.id).classList.add("hide");
      } else {
        document.querySelector("#" + this.id).classList.remove("hide");
      }

      toggle = !toggle;
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  border-radius: 16px;
  box-shadow: 0px 3px 6px #00000029;
  height: fit-content;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 20px;
  font-size: 16px;
}

.card p {
  color: #616b71;
}

.card button {
  border: none;
  width: fit-content;
  height: fit-content;
  background: transparent;
}

.toggleItem {
  margin-top: -8px;
  border-radius: 0 0 16px 16px;
  z-index: -1;
}

.hide {
  display: none;
}
</style>

<template>
  <div class="container">
    <h1 class="greeting">My order</h1>
    <hr />
    <div class="order-container">
      <ul class="nav nav-pills nav-justified" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link switch-button active"
            id="ongoing-order-tab"
            data-bs-toggle="pill"
            data-bs-target="#ongoing-order"
            type="button"
            role="tab"
            aria-controls="ongoing-order"
            aria-selected="true"
          >
            On going
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link switch-button"
            id="past-order-tab"
            data-bs-toggle="pill"
            data-bs-target="#past-order"
            type="button"
            role="tab"
            aria-controls="past-order"
            aria-selected="false"
          >
            Past
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div class="tab-pane fade show active" id="ongoing-order" role="tabpanel" aria-labelledby="ongoing-order-tab">
          <div v-if="!showOngoing">
            <img
              src="../images/myorders/ongoing.svg"
              style="width: 200px; height: 200px;"
              alt="ongoing"
              @click="showOngoing = !showOngoing"
            />
            <h3>Order now for your orders to appear here.</h3>
          </div>
          <div v-else>
            <FoodCard txt="Cheese Garlic Bread" id="pizza" />
            <FoodCard txt="Shit" id="pizza" />
            <FoodCard txt="Yesser" id="pizza" />
          </div>
        </div>
        <div class="tab-pane fade" id="past-order" role="tabpanel" aria-labelledby="past-order-tab">
          <div v-if="!showPast">
            <img
              src="../images/myorders/past.svg"
              style="width: 200px; height: 200px;"
              alt="ongoing"
              @click="showPast = !showPast"
            />
            <h3>Oops! Your past looks empty.</h3>
          </div>
          <div v-else>
            <FoodCard txt="TESTING" id="num1" />
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <Navbar />
    </div>
  </div>
</template>
<script scoped>
import Navbar from "../components/Navbar.vue";
import FoodCard from "../components/FoodCard.vue";

export default {
  components: { Navbar, FoodCard },
  data: function() {
    return { showOngoing: false, showPast: false };
  },
  methods: {
    goBack: function() {
      window.history.back();
    },
    gotoPage: function(destination) {
      this.$router.push(destination);
    },
  },
};
</script>
<style scoped>
.container {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  height: 100%;
}

.greeting {
  position: relative;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 40px;
  text-align: left;
  font: normal normal bold 2rem Roboto;
  letter-spacing: -0.3px;
  color: #1a1824;
}

.order-container {
  position: relative;
  margin-top: 30px;
  height: 100%;
}

ul.nav-pills {
  border: 1px solid black;
  border-radius: 20px;
}

.switch-button {
  box-shadow: inset 0px 0px 15px 3px #ffffff;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  display: inline-block;
  cursor: pointer;
  color: #b8bbc6;
  font-size: 15px;
  padding: 6px 13px;
  text-decoration: none;
}

.nav-link.active {
  box-shadow: inset 0px 0px 15px 3px #511401;
  background: #511401 0% 0% no-repeat padding-box;
  border: none;
  color: #ffffff;
}

.tab-content {
  margin-top: 20px;
  height: 100%;
}

.tab-pane {
  height: 80%;
  position: absolute;
  padding-top: 15%;
  width: 100%;
  text-align: center;
  overflow: auto;
}

.navbar {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: 0;
}
</style>

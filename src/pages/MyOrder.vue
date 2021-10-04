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
          <img src="../images/myorders/ongoing.svg" style="width: 200px; height: 200px;" alt="ongoing" />
          <h3>Order now for your orders to appear here.</h3>
          <!-- <div class="card w-90">
            <div class="row">
              <div class="col-3">
                <img src="../images/myorders/pizza.png" style="width: 90px; height: auto;" alt="pizza" />
              </div>
              <div class="col-9">
                <h3>The Pizza Place</h3>
                <p>Ordered Time : 20:36 | Order ID : 3456 Items : Cheese Garlic Bread</p>
                <button class="btn-status"><img src="" alt="status" /></button>
              </div>
            </div>
          </div> -->
        </div>
        <div class="tab-pane fade" id="past-order" role="tabpanel" aria-labelledby="past-order-tab">
          <img src="../images/myorders/past.svg" style="width: 200px; height: 200px;" alt="ongoing" />
          <h3>Oops! Your past looks empty.</h3>
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
export default {
  components: { Navbar },
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
  margin-bottom: 30px;
  font-size: 16px;
}

.col-9 p {
  color: #616b71;
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

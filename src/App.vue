<template>
  <div class="view container-fluid">
    <!-- Logo section -->
    <div class="logo row">
      <div class="col">
        <img src="./images/grabeasy.png" alt="logo" />
      </div>
    </div>
    <!-- End logo section -->

    <div class="middle row">
      <h1>Information here</h1>
    </div>

    <!-- Bottom section -->
    <div class="bottom row">
      <!-- Text section -->
      <div class="text row">
        <div class="text col">
          <p>Hey there, Let's get started.<br />Enter your mobile number</p>
        </div>
      </div>
      <!-- End text section -->

      <!-- Input section -->
      <div class="input row">
        <div class="input col">
          <div class="input-box">
            <span id="area-code">
              +1
            </span>
            <input type="tel" />
          </div>
          <a href="/"
            ><img class="btn" src="./images/doubleleft.svg" alt="enter-btn"
          /></a>
        </div>
      </div>
      <!-- End input section -->
    </div>
    <!-- End bottom section -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
@import "./styles/App.css";
</style>

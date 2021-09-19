<template>
  <div class="view container-fluid">
    <!-- Logo section -->
    <div class="logo row">
      <div class="col">
        <img src="./images/grabeasy.png" alt="logo" />
      </div>
    </div>
    <!-- End logo section -->

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
          <input type="tel" />
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

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto";
  color: white;
  margin: 0;
  background-color: black;
}

.view {
  position: relative;
  height: 100vh;
  width: 100%;
}

.logo.row {
  position: absolute;
  top: 100px;
  width: 100%;
  text-align: center;
}

.bottom.row {
  position: absolute;
  top: auto;
  bottom: 100px;
  width: 100%;
  text-align: center;
}
</style>

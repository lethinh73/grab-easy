<template>
  <div class="view container-fluid">
    <!-- Logo section -->
    <div class="logo row">
      <div class="col">
        <img src="./images/grabeasy.png" alt="logo" />
      </div>
    </div>
    <!-- End logo section -->

    <div class="middle row"></div>

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
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}

.logo.row {
  top: 15%;
  width: 100%;
  text-align: center;
}

.middle.row {
  margin: auto;
  width: 100%;
  text-align: center;
  height: 40%;
  min-height: 200px;
}

.bottom.row {
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
}

.text.col {
  width: 500px;
  margin-left: calc(50% - 125px);
}

.input.col {
  width: 500px;
  margin-left: calc(50% - 125px);
}
</style>

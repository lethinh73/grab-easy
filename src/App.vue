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

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
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
  display: flex;
  flex-direction: row;
  width: 500px;
  margin-left: calc(50% - 125px);
}

.area-code {
  color: white;
  width: 70px;
  border: none;
  background-color: black;
  opacity: 0.3;
}

.input-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid white;
  border-radius: 14px;
  width: 200px;
  padding-left: 10px;
}

input {
  border: none;
  background-color: black;
  color: white;
  width: 100px;
  margin-left: 10px;
  width: 150px;
}
</style>

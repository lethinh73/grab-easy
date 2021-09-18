<template>
  <div class="container-fluid h-100">
    <div class="row justify-content-center">
      <div class="col-4">
        <img class="col-12" src="./images/grabeasy.png" alt="logo" />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="row justify-content-center">
        <div class="col-4 flex-start">
          <p style="">
            Hey there, Let's get started.<br />Enter your mobile number
          </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-4 flex-start">
          <input type="tel" />
          <a href="/"
            ><img class="btn" src="./images/doubleleft.svg" alt="enter-btn"
          /></a>
        </div>
      </div>
    </div>
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
</style>

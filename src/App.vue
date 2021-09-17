<template>
  <div class="top-container">
    <img class="logo" src="./images/grabeasy.png" alt="logo" />
    <div class="fs-3 intro">
      Hey there, Let's get started.
      <p>Enter your mobile number</p>
    </div>

    <div class="bottom-container">
      <div class="phone-box">
        <span>+1</span
        ><input
          class="tel-input"
          type="tel"
          placeholder="Enter your mobile number"
        />
      </div>
      <a href="/"
        ><img class="enter-btn" src="./images/doubleleft.svg" alt="enter-btn"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  background-color: black;
}
</style>

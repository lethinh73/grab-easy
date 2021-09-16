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
* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
}

.top-container {
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  color: white;
}

.logo {
  height: fit-content;
  width: fit-content;
}

.intro {
  margin-top: 30vh;
  margin-bottom: 5px;
  text-align: left;
  width: 310px;
}

.bottom-container {
  display: flex;
  width: 310px;
  height: 100%;
  justify-content: flex-start;
  bottom: 0ch;
  margin-bottom: 0;
}

.phone-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  height: 40px;
  width: 80%;
  border: 1px solid #ffffff;
  border-radius: 24px;
  opacity: 1;
}

.tel-input {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: white;
  margin-left: 5px;
  border: hidden;
  width: 13rem;
  background-color: black;
  letter-spacing: 0.19px;
  color: #ffffff;
  opacity: 0.5;
}

.enter-btn {
  margin-top: 10px;
  margin-left: 30px;
}
</style>

<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
* {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
}

body {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

input {
  border: none;
}
.wrapper {
  border: 1px black solid;
  height: 100vh;
  width: calc(100vh * 0.5625);
  position: relative;
}
</style>

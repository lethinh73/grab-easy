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
  margin: 0;
  display: flex;
  justify-content: center;
}

input {
  border: none;
}
.wrapper {
  height: 640px;
  width: 360px;
  position: relative;
}
</style>

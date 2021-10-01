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
  margin: 0;
  padding: 0;
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
  width: 360px;
  /* height: 640px; */
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 2px 3px 6px 2px #00000029;
  border-radius: 15px;
  opacity: 1;
}
</style>

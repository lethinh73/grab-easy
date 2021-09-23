<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

body {
  min-width: 300px;
  min-height: 550px;
}
a.nav-link {
  color: black;
  text-decoration: none;
}
input {
  border: none;
}
</style>

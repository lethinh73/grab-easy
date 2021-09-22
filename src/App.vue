<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

};
</script>
<style scoped>
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
}

body {
  min-width: 300px;
  min-height: 550px;
  margin: 0;
}
a.nav-link {
  color: black;
  text-decoration: none;
}
</style>

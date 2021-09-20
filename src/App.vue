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
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
}
a.nav-link {
  color: black;
}
input:focus {
  outline: none;
}
</style>

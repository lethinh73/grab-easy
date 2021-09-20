<template>
  <router-view />
</template>

<script>
let step = 1;
let phoneNumber = "";

export default {
  name: "App",
  methods: {},
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}
a.nav-link {
  color: black;
}
input:focus {
  outline: none;
}
</style>

<template>
  <div class="container d-flex flex-column  flex-md-row my-2">
    <Navbar />
    <SearchBar />
  </div>
</template>
<script>
import Navbar from "./Navbar.vue";
import SearchBar from "./SearchBar.vue";
export default {
  components: { Navbar, SearchBar },
};
</script>
<style></style>

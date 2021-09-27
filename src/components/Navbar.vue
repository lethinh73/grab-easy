<template>
  <div>
    <ul class="nav">
      <li class="nav-item" v-on:click="gotoPage('/venue')">
        <img src="../images/sydney-opera-house.svg" />
        <a class="nav-link" aria-current="page" href="#">HOME</a>
      </li>
      <li class="nav-item" v-on:click="gotoPage('/offers')">
        <img src="../images/Glyph-Copy.svg" />
        <a class="nav-link" href="#">MY ORDERS</a>
      </li>
      <li class="nav-item" v-on:click="gotoPage('/offers')">
        <img src="../images/offers.svg" />
        <a class="nav-link" href="#">OFFERS</a>
      </li>
      <li class="nav-item" v-on:click="gotoPage('/profile')">
        <img src="../images/profile.svg" />
        <a class="nav-link" href="#">PROFILES</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  methods: {
    gotoPage: function(destination) {
      this.$router.push(destination);
    },
  },
};
</script>
<style scoped>
.nav {
  background: #f5f5f5;
  justify-content: center;
  padding: 10px 0;
  font-size: 0.6rem;
  flex-wrap: nowrap;
}
.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nav-link {
  color: black;
}
.nav-item img {
  height: 20px;
}
@media (min-width: 768px) {
  .nav {
    font-size: 0.9rem;
  }
  .nav-link {
    padding: 0.8rem;
  }
}
@media (min-width: 992px) {
  .nav-link {
    padding: 0.5rem 1rem;
  }
}
@media (min-width: 1200px) {
  .nav {
    padding: 20px 30px;
  }
}
</style>

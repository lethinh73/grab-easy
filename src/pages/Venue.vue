<template>
  <SearchBar class="fixed-top" />
  <div class="d-flex justify-content-center container mt-5">
    <img class="main" src="../images/main-store/lg.png" />
  </div>
  <div class="cannot-find container">
    <p class="text-center rounded-pill my-3">
      Cannot find any Creamston outlet near you, we are available at the below
      locations.
    </p>
  </div>
  <div class="order-at container">
    <p class="fw-bold my-3">
      You can order using app at:
    </p>
  </div>
  <div class=" container">
    <div class=" scrolling-wrapper d-flex flex-nowrap over-flow-x-auto">
      <div
        class="card-wrapper col-3 mb-3 me-4"
        v-for="place in places"
        :key="place.id"
      >
        <img :src="require(`../images/place-name/${place.img}`)" />
        <p class="mt-2 mb-1">{{ place.name }}</p>
        <p class="area-name text-secondary">{{ place.area }}</p>
      </div>
    </div>
  </div>
  <Navbar class="fixed-bottom" />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { Navbar, SearchBar },
  data() {
    return {
      places: [
        {
          id: 1,
          name: "Place Name",
          area: "Area Name",
          img: "@2x.png",
        },
        {
          id: 2,
          name: "Place Name",
          area: "Area Name",
          img: "@2x.png",
        },
        {
          id: 3,
          name: "Place Name",
          area: "Area Name",
          img: "@2x.png",
        },
        {
          id: 4,
          name: "Place Name",
          area: "Area Name",
          img: "@2x.png",
        },
        {
          id: 5,
          name: "Place Name",
          area: "Area Name",
          img: "@2x.png",
        },
        {
          id: 6,
          name: "Place Name",
          area: "Area Name",
          img: "@2x.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
div {
  background: white;
}
img.main {
  width: 100%;
  object-fit: contain;
}
.cannot-find p {
  background: #f5f5f5;
  padding: 13px 35px;
}
.order-at p {
  font-size: 1.1rem;
}
.scrolling-wrapper img {
  width: 100%;
}
.area-name {
  font-size: 0.8rem;
}
.scrolling-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 80px;
}
.card-wrapper {
  flex: 0 0 auto;
}
@media (min-width: 992px) {
  .place img {
    width: 80%;
  }
}
@media (min-width: 1200px) {
  .cannot-find p {
    padding: 20px 50px;
    font-size: 1.1rem;
  }
  .order-at p {
    font-size: 1.2rem;
  }
}
</style>

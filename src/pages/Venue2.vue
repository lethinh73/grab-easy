<template>
  <SearchBar class="fixed-top" />
  <!-- Carousel part -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide d-flex justify-content-center container mt-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="../images/main-store/lg.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../images/main-store/lg.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="../images/main-store/lg.png"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- location part -->

  <div class="order-at container">
    <p class="fw-bold mt-5 mb-3">
      Where are you at?
    </p>
  </div>
  <div class=" container">
    <div class=" scrolling-wrapper d-flex flex-nowrap ">
      <div
        class="card-wrapper col-4 mb-3 me-3"
        v-for="place in places"
        :key="place.id"
      >
        <img :src="require(`../images/no-venue-cream-stone/${place.img}`)" />
        <p class="mt-2 mb-1">{{ place.name }}</p>
        <p class="area-name text-secondary">{{ place.area }}</p>
      </div>
    </div>
  </div>
  <Navbar class="fixed-bottom" />
</template>
<script scoped>
import Navbar from "../components/Navbar.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: { Navbar, SearchBar },
  data() {
    return {
      places: [
        {
          id: 1,
          name: "Creamstone",
          area: "City Center",
          img: "no-venue-cream-stone@2x.png",
        },
        {
          id: 2,
          name: "Creamstone",
          area: "City Center",
          img: "no-venue-cream-stone@2x.png",
        },
        {
          id: 3,
          name: "Creamstone",
          area: "City Center",
          img: "no-venue-cream-stone@2x.png",
        },
        {
          id: 4,
          name: "Creamstone",
          area: "City Center",
          img: "no-venue-cream-stone@2x.png",
        },
        {
          id: 5,
          name: "Creamstone",
          area: "City Center",
          img: "no-venue-cream-stone@2x.png",
        },
      ],
    };
  },
};
</script>
<style scoped>
.fixed-top,
.fixed-bottom {
  display: flex;
  justify-content: center;
}
a.nav-link {
  color: black;
  text-decoration: none;
}

div {
  background: white;
}
img.main {
  width: 100%;
  object-fit: contain;
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
  overflow-x: auto;
  margin-bottom: 80px;
}
.card-wrapper {
  flex: 0 0 auto;
}
.card-wrapper p:nth-child(2) {
  font-size: 10px;
}
.card-wrapper p:nth-child(3) {
  font-size: 8px;
}
.carousel-control-next,
.carousel-control-prev {
  filter: invert(100%);
}
.carousel-indicators {
  background: transparent;
  bottom: -35px;
}
.carousel-indicators button {
  width: 6px;
  height: 6px;
  margin: 2px;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: #707070;
}
.carousel-indicators button.active {
  width: 16px;
  border-radius: 10px;
}
/* @media (min-width: 992px) {
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
} */
</style>

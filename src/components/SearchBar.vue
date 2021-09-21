<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form>
      <img class="location" src="../images/location.svg" />
      <img class="next" src="../images/next.svg" />
      <input type="text" placeholder="Banjara Hills " />
    </form>
  </div>
</template>
<script></script>
<style scoped>
form {
  width: 100%;
  position: relative;
  padding: 5px 0;
}
input {
  width: 100%;
  border-radius: 15px;
  padding: 5px 5px 5px 35px;
  border: none;
}
img.location {
  position: absolute;
  left: 15px;
  top: 25%;
}
img.next {
  position: absolute;
  left: 120px;
  top: 40%;
}
@media (min-width: 768px) {
  form {
    padding: 10px 0;
  }
}
@media (min-width: 992px) {
  form {
    padding: 15px 0;
    font-size: 1.2rem;
  }
}
</style>

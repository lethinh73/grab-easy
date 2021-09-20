<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form>
      <img class="location" src="../images/location.svg" />
      <img class="next" src="../images/next.svg" />
      <input type="text" placeholder="Search store" />
    </form>
  </div>
</template>
<script></script>
<style scoped>
form {
  width: 300px;
  position: relative;
}
input {
  width: 100%;
  border-radius: 15px;
  padding: 5px 5px 5px 35px;
}
img.location {
  position: absolute;
  left: 15px;
  top: 25%;
}
img.next {
  position: absolute;
  right: 15px;
  top: 40%;
}
@media (min-width: 768px) {
  form {
    width: 230px;
  }
}
@media (min-width: 992px) {
  form {
    width: 400px;
  }
}
</style>

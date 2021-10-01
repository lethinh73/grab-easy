<template>
  <div class="header-img w-100">
    <img class="img-fluid w-100 " src="../images/items-main/2x.png" />
  </div>
  <form class="items-form py-3 px-4">
    <input placeholder="Category Name" />
    <img src="../images/items-search.svg" />
  </form>
  <div class="container px-2 mt-3">
    <div class="items-list m-0 row">
      <div
        v-for="item in items"
        :key="item.id"
        class="item-wrapper col-6 p-0 my-1 d-flex justify-content-center"
      >
        <Item :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import Item from "../components/Item.vue";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Item name",
          price: 562,
          image: "cream-stone-icecream1.png",
          customizable: true,
        },
        {
          id: 2,
          name: "Item name",
          price: 562,
          image: "cream-stone-icecream2.png",
          customizable: false,
        },
        {
          id: 3,
          name: "Item name",
          price: 562,
          image: "cream-stone-icecream3.png",
          customizable: true,
        },
        {
          id: 4,
          name: "Item name",
          price: 562,
          image: "cream-stone-icecream4.png",
          customizable: false,
        },
        {
          id: 5,
          name: "Item name",
          price: 562,
          image: "cream-stone-icecream5.png",
          customizable: false,
        },
        {
          id: 6,
          name: "Item name",
          price: 562,
          image: "cream-stone-icecream6.png",
          customizable: true,
        },
      ],
    };
  },
  components: { Item },
};
</script>
<style scoped>
form {
  background: #f3f2f2;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}
form img {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
}
form input {
  background: #f3f2f2;
}
::placeholder {
  color: black;
}
.items-list {
  overflow: scroll;
  width: 100%;
}
@media (min-width: 768px) {
}
</style>

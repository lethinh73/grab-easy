<template>
  <div class="header-img w-100">
    <img
      class="img-fluid w-100"
      src="../images/back.svg"
      style="width: 17px; height: 15px; left: 20px"
    />
  </div>
  <!-- <form class="items-form py-3 px-4">
    <input placeholder="Category Name" />
    <img src="../images/items-search.svg" />
  </form> -->
  <div class="row mt-3 w-100">
    <div
      v-for="item in items"
      :key="item.id"
      class="col-6 p-2 justify-content-center"
    >
      <Item :item="item" />
    </div>
  </div>
</template>
<script>
import Item from "../components/catItems.vue";
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Item name",
          image: "item1.png",
        },
        {
          id: 2,
          name: "Item name",
          image: "item2.png",
        },
        {
          id: 3,
          name: "Item name",
          image: "item3.png",
        },
        {
          id: 4,
          name: "Item name",
          image: "item4.png",
        },
        {
          id: 5,
          name: "Item name",
          image: "item5.png",
        },
        {
          id: 6,
          name: "Item name",
          image: "item6.png",
        },
      ],
    };
  },
  components: { Item },
};
</script>
<style scoped>

</style>

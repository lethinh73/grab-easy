<template>
  <div class="arrow">
    <img
      src="../images/back.svg"
      style="width: 17px; height: 15px; opacity: 1"
    />
    <div class="name">Categories</div>
  </div>

  <div class="row m-0 mt-4 w-100">
    <div
      v-for="item in items"
      :key="item.id"
      class="col-6 p-0 m-0 d-flex justify-content-center"
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
          name: "Nutty Concepts",
          image: "item1.png",
        },
        {
          id: 2,
          name: "Chocolate Concepts",
          image: "item2.png",
        },
        {
          id: 3,
          name: "Fresh Fruit Concepts",
          image: "item3.png",
        },
        {
          id: 4,
          name: "Diet Concepts",
          image: "item4.png",
        },
        {
          id: 5,
          name: "Summer Specials",
          image: "item5.png",
        },
        {
          id: 6,
          name: "Kids Concepts",
          image: "item6.png",
        },
        {
          id: 7,
          name: "Cream Stone Icecream",
          image: "item7.png",
        },
        {
          id: 8,
          name: "Nice Pie",
          image: "item8.png",
        },
      ],
    };
  },
  components: { Item },
};
</script>


<style scoped>
.arrow {
  width: fit-content;
  padding-left: 20px;
  padding-top: 10px;
}

.name {
  padding-top: 10px;
  width: 125px;
  height: 21px;
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0.13px;
  color: #0a1f44;
  opacity: 1;
}
</style>

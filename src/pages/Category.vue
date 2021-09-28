<template>
 <img src="../images/GrabCat/arrow-left.svg">

  <div class="Category"> 
    <h2>  Category </h2>

    <div class=" container">
    <div class=" scrolling-wrapper d-flex flex-nowrap ">
      <div
        class="card-wrapper col-3 mb-3 me-4"
        v-for="place in places"
        :key="place.id"
      >
        <img :src="require(`../images/GrabCat/${place.img}`)" />
        <p class="mt-2 mb-1">{{ place.name }}</p>
        <p class="area-name text-secondary">{{ place.area }}</p>
      </div>
    </div>
  </div>





  </div>

</template>

<script>

export default {
  

  data() {
    return {
      places: [

        {
          id: 1,
          name: "Catpics",
          GrabCat: "blue.png",
        },

        {
            id: 2,
            name: "Catpics",
            GrabCat: "brown.png",
        },

         {
            id: 3,
            name: "Catpics",
            GrabCat: "dot.png",
        },

         {
            id: 4,
            name: "Catpics",
            GrabCat: "mango.png",
        },

         {
            id: 5,
            name: "Catpics",
            GrabCat: "pink.png",
        },

         {
            id: 6,
            name: "Catpics",
            GrabCat: "swiggy.png",
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



</style>


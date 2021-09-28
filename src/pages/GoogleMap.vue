<template>
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <GMapMap class="map"
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width:100%; height:100%; position: fixed;"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
      <img class="gps"/>
    </GMapCluster>
    </GMapMap>

    <div class="search">
        <div  class="title">Select Location</div>
        <div  class="myloc">Your Location</div>
      <input class="ipt" placeholder="Please Enter A Location" v-on:submit.prevent="addChat()" />
      <button class="btn" @click='addMarker' v-on:click="addChat()">Confirm Location & Proceed</button>
    </div>
  </div>
</template>

<script>
let step = 1;
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [{
          position:{
              lat: 45.508, lng: -73.587
          },
      }],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    addChat: function() {
      if (step === 1) {
        this.$router.push("/Venue");
      }
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}

.gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:1250px;
      bottom: 260px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
.search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 5px #00000029;
    border-radius: 12px 12px 0px 0px;
    opacity: 1;
    overflow:hidden;
    position: absolute;
    background-color: white;
    bottom: 0;
}

.title{
    width:333px;
    position: absolute;
    bottom: 200px;
    font:normal normal bold 25px/22px Open Sans;
}
.myloc{
    width:333px;
    font: normal normal 600 15px/17px Open Sans;
    position: absolute;
    bottom: 150px;
}

.map{
    height: 70vh;
}
.btn{
  width: 240px;
  height: 42px;
  background: #521D0D 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  opacity: 1;
  position: absolute;
  bottom: 40px;
  color: white;
  border: 0;
  border-radius: 5px;
}

.ipt{
  width: 333px; 
  height: 39px; 
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border:0;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 5px;
  position: absolute;
  padding-left: 10px;
}


@media (max-width: 299px){
  .title{
    width:250px;
    position: absolute;
    bottom: 200px;
    font:normal normal bold 25px/22px Open Sans;
 }

 .myloc{
   width: 250px;
   position: absolute;
 }

 .ipt{
   position: absolute;
   width: 250px;
 }
 .btn {
 width: 100%;
 bottom: 0;
 font: normal normal bold 12px/17px Open Sans;
 border-radius: 0;
 }

 .map{
     height: 30vh;
 }
 .gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:250px;
      bottom: 260px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}

@media (max-width: 329px) and (min-width: 300px) {
      .search{
        height: 200px;
      }
      .btn {
        width: 100%;
        bottom: 0;
        font: normal normal bold 12px/17px Open Sans;
        border-radius: 0;
      }
 .title{
    width:300px;
    position: absolute;
    bottom: 150px;
    font:normal normal bold 25px/22px Open Sans;
 }

 .myloc{
   width: 300px;
   position: absolute;
   bottom: 110px;
 }

 .ipt{
   width: 300px;
   font-size: 15px;
   position: absolute;
   bottom: 70px;
 }
  .gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:290px;
      bottom: 204px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}

@media (max-width: 360px) and (min-width: 330px){
        .search{
        height: 200px;
      }
      .btn {
        width: 100%;
        bottom: 0;
        font: normal normal bold 12px/17px Open Sans;
        border-radius: 0;
      }
 .title{
    width:300px;
    position: absolute;
    bottom: 150px;
    font:normal normal bold 25px/22px Open Sans;
 }

 .myloc{
   width: 300px;
   position: absolute;
   bottom: 110px;
 }

 .ipt{
   width: 300px;
   font-size: 15px;
   position: absolute;
   bottom: 65px;
 }
  .gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:330px;
      bottom: 204px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}

@media (max-width: 399px) and (min-width: 361px){
   .btn {
 width: 100%;
 bottom: 0;
 font: normal normal bold 12px/17px Open Sans;
 border-radius: 0;
 }
 .title{
    width:300px;
    position: absolute;
    bottom: 200px;
    font:normal normal bold 25px/22px Open Sans;
 }

 .myloc{
   width: 300px;
   position: absolute;
   bottom: 150px;
 }

 .ipt{
   width: 300px;
   font-size: 15px;
   position: absolute;
   bottom: 107px;
 }
  .gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:340px;
      bottom: 255px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}

@media (max-width: 668px) and (min-width: 400px) {
 .btn {
 width: 100%;
 bottom: 0;
 font: normal normal bold 12px/17px Open Sans;
 border-radius: 0;
 }
 .title{
    width:300px;
    position: absolute;
    bottom: 200px;
    font:normal normal bold 25px/22px Open Sans;
 }

 .myloc{
   width: 300px;
   position: absolute;
   bottom: 150px;
 }

 .ipt{
   width: 300px;
   font-size: 15px;
   position: absolute;
   bottom: 107px;
 }
.gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:380px;
      bottom: 260px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}

@media (max-width: 878px) and (min-width: 669px){
 .btn {
 width: 100%;
 height: 60px;
 bottom: 0;
 font: normal normal bold 24px/17px Open Sans;
 border-radius: 0;
 }

  .title{
    width:600px;
    position: absolute;
    font:normal normal bold 35px/22px Open Sans;
 }

 .myloc{
   width:600px;
   font: normal normal 600 20px/17px Open Sans;
   position: absolute;
   bottom: 160px;
 }

 .ipt{
   width:600px;
   height: 60px;
   font-size: 30px;
   position: absolute;
   bottom: 80px;
 }
 .gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:840px;
      bottom: 260px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}
 
@media (max-width: 992px) and (min-width: 890px) {
 .btn {
 width: 100%;
 height: 60px;
 bottom: 0;
 font: normal normal bold 24px/17px Open Sans;
 border-radius: 0;
 }

  .title{
    width:600px;
    position: absolute;
    font:normal normal bold 35px/22px Open Sans;
 }

 .myloc{
   width:600px;
   font: normal normal 600 20px/17px Open Sans;
   position: absolute;
   bottom: 160px;
 }

 .ipt{
   width:600px;
   height: 60px;
   font-size: 30px;
   position: absolute;
   bottom: 80px;
 }
 .gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:730px;
      bottom: 260px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}
 
@media (max-width: 1200px) and (min-width: 993px) {
 .btn {
 width: 640px;
 height: 60px;
 bottom: 10px;
 border-radius: 10px;
 font: normal normal bold 18px/17px Open Sans;
 }

.search{
  height: 300px;
}
  .title{
    width:700px;
    position: absolute;
    bottom: 240px;
    font:normal normal bold 40px/22px Open Sans;
 }

 .myloc{
   width: 700px;
   font: normal normal 600 25px/17px Open Sans;
   position: absolute;
   bottom: 190px;
 }

 .ipt{
   width: 700px;
   height: 70px;
   font-size: 30px;
   position: absolute;
   bottom: 100px;
 }
 .gps{
      width: 23px;
      height: 23px;
      position: absolute;
      left:980px;
      bottom: 320px;
      background: transparent url("../images/gps.svg");
      opacity: 1;
      /*border: 0;*/
}
}

</style>
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
    </GMapCluster>
  </GMapMap>

    <div class="search">
        <div class="title">Select Location</div>
        <div class="myloc">Your Location</div>
      <input class="ipt" placeholder="Please Enter A Location" />
      <button class="btn" @click='addMarker'>Confirm Location & Proceed</button>
    </div>
  </div>
</template>

<script>
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

.search{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 5px #00000029;
    border-radius: 12px 12px 0px 0px;
    opacity: 1;
    overflow:hidden;
    position: fixed;
    background-color: white;
    bottom: 0;
}

.title{
    width:333px;
    position: fixed;
    margin-bottom: 130px;
    font:normal normal bold 25px/22px Open Sans;
}
.myloc{
    width:333px;
    font: normal normal 600 15px/17px Open Sans;
    position: fixed;
    margin-bottom: 70px;
    margin-top: 40px;
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
  color: white;
  margin-top: 150px;
  border: 0;
  border-radius: 0;
}

.ipt{
  width: 333px; 
  height: 39px; 
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border:0;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 5px;
  margin-top: 50px;
}

@media (max-width: 299px){
  .title{
    width:250px;
    position: fixed;
    margin-bottom: 130px;
    font:normal normal bold 25px/22px Open Sans;
 }

 .myloc{
   width: 250px;
   margin-top: 30px;
 }

 .ipt{
   margin-top: 30px;
   width: 250px;
 }
 .btn {
 width: 100%;
 bottom: 0;
 font: normal normal bold 12px/17px Open Sans;
 }

 .map{
     height: 30vh;
 }
}

@media (max-width: 668px) and (min-width: 300px) {
 .btn {
 width: 100%;
 bottom: 0;
 font: normal normal bold 14px/17px Open Sans;
 }
 .title{
    width:300px;
    position: fixed;
    margin-bottom: 130px;
    font:normal normal bold 25px/22px Open Sans;
 }

 .myloc{
   width: 300px;
   margin-top: 30px;
 }

 .ipt{
   margin-top: 30px;
   width: 300px;
 }
}
 
@media (max-width: 992px) and (min-width: 760px) {
 .btn {
 width: 100%;
 height: 60px;
 bottom: 0;
 font: normal normal bold 24px/17px Open Sans;
 }

  .title{
    width:600px;
    position: fixed;
    margin-bottom: 160px;
    font:normal normal bold 40px/22px Open Sans;
 }

 .myloc{
   width:600px;
   font: normal normal 600 25px/17px Open Sans;
   margin-bottom: 90px;
 }

 .ipt{
   width:600px;
   height: 60px;
   font-size: 30px;
 }
}
 
@media (max-width: 1200px) and (min-width: 993px) {
 .btn {
 width: 640px;
 height: 60px;
 bottom: 40px;
 border-radius: 10px;
 font: normal normal bold 18px/17px Open Sans;
 }

  .title{
    width:700px;
    position: fixed;
    margin-bottom: 180px;
    font:normal normal bold 50px/22px Open Sans;
 }

 .myloc{
   width: 700px;
   font: normal normal 600 30px/17px Open Sans;
 }

 .ipt{
   width: 700px;
   height: 70px;
   margin-top: 90px;
   font-size: 30px;
 }
}
</style>
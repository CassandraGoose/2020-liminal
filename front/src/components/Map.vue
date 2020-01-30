<template>
  <MglMap
    container="city-map"
    :accessToken="accessToken"
    :mapStyle="mapStyle"
    :center.sync="center"
    :zoom="zoom"
  >
  <div v-for="place in places" :key="place.id">
    <MglMarker
      @click="showPlaceInfo(place)"
      :coordinates.sync="place.features[0].geometry.coordinates"
      color="white"
      anchor="bottom"
    >
    </MglMarker>
  </div>

  </MglMap>
</template>

<script>
import { mapMutations } from 'vuex';
import Mapbox from 'mapbox-gl';
import { MglMap, MglMarker } from 'vue-mapbox';

export default {
  name: 'Map',
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
      mapStyle: process.env.VUE_APP_MAPBOX_STYLE,
      center: [-104.9, 39.7],
      zoom: 10,
      places: [],
    };
  },
  created() {
    this.mapbox = Mapbox;
  },
  methods: {
    ...mapMutations(['showPlaceInfo', 'toggleMenu']),
    async getPlaces() {
      const response = await fetch('http://localhost:3000/city/denver');
      const json = await response.json();
      this.places = json;
    },
  },
  mounted() {
    this.getPlaces();
  },
  components: {
    MglMap,
    MglMarker,
  },
};
</script>

<style lang="scss">
  .mapboxgl-marker {
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;
  }

  @font-face {
    font-family: Recorda;
    src: url(../assets/recorda.otf);
  }
</style>

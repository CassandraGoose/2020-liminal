<template>
  <div class="info-box" v-if="placeInfo">
    <b-card-group>
      <b-card :title="placeInfo.features[0].text">
        <template v-slot:header>
          {{formatAddress(placeInfo.features[0].place_name)}}
          <span class="ex" @click="notShowPlaceInfo">x</span>
        </template>
        <b-card-text>
          Tell them I hate them. Who are you, my warranty?!
          Come, Comrade Bender! We must take to the streets!
          I'll get my kit! You, a bobsleder!? That I'd like to see!
          Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor.
          Well, let's just dump it in the sewer and say we delivered it. Meh. And remember,
          don't do anything that affects anything, unless it turns out you were supposed to,
          in which case, for the love of God, don't not do it!
        </b-card-text>
        <template v-slot:footer>
          <p>{{placeInfo.features[0].properties.category}}</p>
        </template>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'PlaceInfo',
  computed: {
    ...mapState(['placeInfo']),

  },
  methods: {
    ...mapMutations(['notShowPlaceInfo']),
    formatAddress(address) {
      return address.split(',')[1];
    },
  },
};
</script>

<style>
.info-box {
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-x: hidden;
}

.ex {
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.card-group {
  height: 100%;
}

</style>

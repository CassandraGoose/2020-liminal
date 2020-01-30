<template>
  <div class="new-place">
    <section class="new-place-content">
      <h2>Submit a New Liminal Place</h2>
      <b-form>
        <b-form-group id="name-of-place-group" label="Place Name" label-for="name-of-place-input">
          <b-form-input
            id="name-of-place-input"
            v-model="form.placeName"
            required
            placeholder="Place Name"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="why-this-place-group"
          label="What makes this place liminal?"
          label-for="why-this-place-textarea"
        >
            <b-form-textarea
              id="why-this-place-textarea"
              v-model="form.whyPlace"
              placeholder="Tell us about this place..."
              rows="10"
            ></b-form-textarea>
         </b-form-group>
            <b-form-group label="How would you categorize this place?">
              <b-form-checkbox-group v-model="form.types" id="why-this-place-checkbox-group">
                <b-form-checkbox value="haunted">Haunted</b-form-checkbox>
                <b-form-checkbox value="haunted">Magic</b-form-checkbox>
                <b-form-checkbox value="threshold">Threshold to Elsewhere</b-form-checkbox>
                <b-form-checkbox value="moonster">Monster/Creature</b-form-checkbox>
                <b-form-checkbox value="psychic">Promotes Psychic Abilities</b-form-checkbox>
                <b-form-checkbox value="aliens">Alien Hotspot</b-form-checkbox>
                <b-form-checkbox value="haunted">Haunted</b-form-checkbox>
                <b-form-checkbox value="other">Other...</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
        <b-button>Submit</b-button>
        <router-link to="/city/denver"><b-button>Cancel</b-button></router-link>
      </b-form>
   </section>
  </div>
</template>

<script>

export default {
  name: 'New',
  data() {
    return {
      form: {
        types: [],
        placeName: '',
        whyPlace: '',
      },
    };
  },
};
</script>

<style scoped>
.new-place {
  background-color: #343332;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;
  color: white;
  height: 100vh;
}

.new-place-content {
  padding-top: 6rem;
}
</style>

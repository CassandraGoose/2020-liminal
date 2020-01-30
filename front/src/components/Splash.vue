<template>
  <div class="splash">
    <h1>
      <div class="letter" v-for="(letter, index) in 'LIMINAL'" :key="index">
        <transition name="fade">
            <span v-if="availableLetters[index].isVisible">{{letter}}</span>
        </transition>
      </div>
    </h1>
    <router-link to="/city/denver"><button>Enter Denver</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data() {
    return {
      availableLetters: [
        {
          isVisible: false,
          index: 0,
        },
        {
          isVisible: false,
          index: 1,
        },
        {
          isVisible: false,
          index: 2,
        },
        {
          isVisible: false,
          index: 3,
        },
        {
          isVisible: false,
          index: 4,
        },
        {
          isVisible: false,
          index: 5,
        },
        {
          isVisible: false,
          index: 6,
        },
      ],
      invisibleLetters: [],
    };
  },
  methods: {
    showLetters() {
      this.invisibleLetters = this.availableLetters.filter(letter => !letter.isVisible);
      const randomIndex = Math.floor(Math.random() * this.invisibleLetters.length);
      const letter = this.invisibleLetters[randomIndex];
      this.availableLetters[letter.index].isVisible = true;
      if (this.invisibleLetters.length - 1 > 0) {
        setTimeout(this.showLetters, Math.random() * (1000, 300) + 300);
      }
    },
  },
  mounted() {
    this.invisibleLetters = this.availableLetters;
    this.showLetters();
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: Recorda;
  src: url(../assets/recorda.otf);
}
.splash {
  height: 100vh;
  background-color: black;
  color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: Recorda;
    font-size: 12rem;
  }
}

button {
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  font-size: 2rem;
  margin: 0;
  text-decoration: none;
  background-color: black;
  text-align: center;
  cursor: pointer;
  color: #f2f2f2;
  transition: background 250ms ease-in-out, transform 150ms ease;
}

button:hover,
button:focus {
  background-color: #7c7f7f;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-enter {
  opacity: 0;
}

.letter {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 12rem;
}
</style>

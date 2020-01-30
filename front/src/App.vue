<template>
  <div id="app">
    <div class="main-content">
      <router-link to="/city/denver"><p class="logo">LIMINAL</p></router-link>
      <router-view/>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  font-family: arial;
}

a {
  text-decoration: none;
  color: white;
}

p {
  color: black;
}

hr {
  color: black;
  background-color: black;
}

  .logo {
    font-family: Recorda;
    font-size: 4rem;
    position: absolute;
    top: 0.5rem;
    right: 2rem;
    z-index: 999999999;
    color: white;
  }
</style>

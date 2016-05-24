<template>
  <div id="app">
    <img class="logo" src="./assets/logo.jpg">
    <hello></hello>
    <p>...and if you don't know, know you know...</p>
    <!-- <explore></explore> -->
  </div>
</template>


<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}

// import Explore from './components/Explore'
//
// export default {
//   components: {
//     Explore
//   }
// }
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: 30px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
}
</style>

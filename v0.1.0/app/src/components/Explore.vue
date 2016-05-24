<template>
  <div class="explore">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'KnowRelation'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #00121c;
}
</style>



<!-- <template>
   <div id="explore">
     <p>{{ prompt }}</p>
     <input v-model="prompt">
     <button v-on:click="reverseMessage">Reverse Message</button>
   </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'What up dawg'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style> -->

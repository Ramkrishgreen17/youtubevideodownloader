<template>
  <div>
    <input type="text" v-model="videoId" placeholder="Enter YouTube Video ID"/>
    <button @click="downloadVideo">Download</button>
  </div>
</template>

<script>
export default {
  name:'tablePage',
  data() {
    return {
    }
  },
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

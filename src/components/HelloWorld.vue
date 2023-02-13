<template>
  <div>
    <input type="text" v-model="videoId" placeholder="Enter YouTube Video ID"/>
    <button @click="downloadVideo">Download</button>
    <input type="text" v-model="videoId" placeholder="Enter YouTube Video ID"/>
    <button @click="downloadVideo">Download</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      videoId: ''
    }
  },
  methods: {
    downloadVideo() {
      axios.get(`http://localhost:3000/download?videoId=${this.videoId}`)
        .then(response => {
          console.log(response.data)
        })
    }
  }
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

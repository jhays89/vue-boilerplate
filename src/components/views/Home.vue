<template>
  <div>
      <h1>Hello World.</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },

  created() {
    // this.$api.get('api/values')
    //   .then(response => {
    //     alert(response.data);
    //   });
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  margin-top: 0;
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

<template>
<!--To make the route possible-->

<router-view />


<!--<Signup /> -->

</template>

<script>
//Since we are using router, we don't need this export and import command
// import Signup from './components/Signup.vue'
// import Home from './components/Home.vue'

// export default {
//   name: 'App',
//   components:{
//     Signup,
//     Home
//   }
// }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo{
  width:100px
}

body{
  padding:0;
  margin:0;
}
</style>

<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <div class="header">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/pricing">Pricing</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/notfound">notfound</router-link></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  margin:auto;
}
.header::after{content:'';clear:both;display:block;}
ul{
  list-style-type: none;
  margin:auto;
}
ul li{
  float: left;
}
ul li+li{margin-left:30px;}
ul li a{text-decoration: none;background:#0086d0; color:white; font-weight: 600;padding: 5px 15px;}
ul li a:hover{transform: scale(1.2); transition-duration: 1.5s;}
</style>

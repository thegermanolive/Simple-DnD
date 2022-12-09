<template>
  <div id="app">
    <div id="nav">
      <nav>
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/Spells">Spells</a></li>
          <li><a href="#/UnAuthorized">Monster</a></li>
          <li><a href="#/Bookmarks">Bookmarks</a></li>
          <li><a href="#/DM-Login">DM-Login</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { BNavbar, BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component('BNavbar', BNavbar);
export default class App extends Vue {}
</script>
<style>
html {
  background: #4682B4;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100%;
  float:right;
  margin: 0 0 1em 0;
  padding: 0;
  background-color: #9e7442;
  border-bottom: 1px solid #ccc;  }

#nav ul {
  list-style: none;
  width: 500px;
  margin: 0 auto;
  padding: 0; }

#nav li {
  float: left; }

#nav li a {
  display: block;
  padding: 8px 15px;
  text-decoration: none;
  font-weight: bold;
  color: black;
  border-right: 1px solid #ccc; }

#nav li:first-child a {
  border-left: 1px solid #ccc; }

#nav li a:hover{
  color: #7a7a7a;
  background-color: #c19a6b ; }

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

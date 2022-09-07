<template>
    <div class="api">
      <img alt="Vue logo" src="../assets/logo.png">
      <ApiComponent msg="Welcome to Your Vue.js App "/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
import ApiComponent from '../components/ApiComponent.vue';
  
  export default {
    name: 'Apicomponent',
    components: {
    ApiComponent
}
  }
  </script>
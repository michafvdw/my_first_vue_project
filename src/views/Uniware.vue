<template>
    <div class="uniware">
      <img alt="Vue logo" src="../assets/logo.png">
      <UniwareComponent msg="Welcome to Your Vue.js App "/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import UniwareComponent from '@/components/UniwareComponent.vue';
  
  export default {
    name: 'Uniware',
    components: {
      UniwareComponent
    }
  }
  </script>
<template>
    <div class="form">
      <img alt="Vue logo" src="../assets/logo.png">
      <FormComponent msg="Welcome to Your Vue.js App "/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
import FormComponent from '../components/FormComponent.vue';
  
  export default {
    name: 'Formcomponent',
    components: {
    FormComponent
}
  }
  </script>
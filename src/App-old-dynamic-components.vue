<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>  
    <p><a href="#" v-on:click="component = 'form-login'">Login</a> | <a href="#" v-on:click="component = 'form-contact'">Contact</a></p>
  </div>
</template>

<script>
import formLogin from './components/formLogin.vue';
import formContact from './components/formContact.vue';

export default {
  components: {
    'form-login': formLogin,
    'form-contact': formContact
  },
  data(){
    return {
      component: 'form-login'
    }
  },
  methods: {
    handleSubmit() {
      alert('handleSubmit');
    }
  }
}
</script>

<style>

</style>

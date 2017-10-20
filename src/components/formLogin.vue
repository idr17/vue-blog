<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Login form</h3>
        <p>Login to enter the system</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="name" placeholder="name" required="required">
        <input type="password" name="password" placeholder="password" required="required">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './formHelper.vue';

export default {
  components: {
    'form-helper': formHelper
  },
  data(){
    return {

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

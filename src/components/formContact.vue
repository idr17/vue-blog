<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Contact form</h3>
        <p>Contact us with this form please..</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="name" placeholder="name" required="required">
        <textarea name="message" placeholder="message" required="required"></textarea>
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
